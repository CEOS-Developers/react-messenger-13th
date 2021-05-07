import styled, { css } from 'styled-components';
import FriendsList from './FriendsList';
import Profile from './Profile';
import { userData } from '../Data';
import { React, useState, useEffect } from 'react';

const Screen = styled.div`
  position: fixed;
  left: 70px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: calc(100% - 100px); //후에 수정 : width 100%로 주면 버튼 사라짐
  margin-left: 30px;
  margin-top: 10px;
`;
const Header = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const SearchButton = styled.button`
  margin-top: 15px;
  margin-right: 30px;
  height: 28px;
  width: 36px;
  background: none;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;

const Input = styled.input`
  width: 90%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 3px;
  padding-left: 10px;
  display: none;
  border-radius: 30px;
  border-color: rgb(207, 195, 194);
  :focus {
    outline: none;
  }
  ${(props) =>
    props.isVisible &&
    css`
      display: inherit;
    `}
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export default function InfoScreen(props) {
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  function toggleVisibleSearch() {
    setIsVisibleSearch(!isVisibleSearch);
  }
  const [list, setList] = useState(userData);
  const [searchText, setSearchText] = useState('');
  function setText(e) {
    setSearchText(e.target.value);
  }
  useEffect(() => {
    setList(
      userData.filter((item) => {
        return item.name.includes(searchText);
      })
    );
  }, [searchText]);
     /* const newList = [];

    for (const item of userData) {
      if (item.name.includes(searchText)) newList.push(item);
    }

    setList(newList); */

  return (
    <Screen>
      <Header>
        <h3>친구목록</h3>
        <SearchButton onClick={toggleVisibleSearch}>
          <Img src={process.env.PUBLIC_URL + 'search.png'} />
        </SearchButton>
      </Header>
      <Input
        isVisible={isVisibleSearch}
        type="text"
        value={searchText}
        onChange={setText}
      />
      {list.map((item) => {
        return <Profile otherProfile={item} />;
      })}
      <FriendsList />
    </Screen>
  );
}
//state 생성
//input값 받기
