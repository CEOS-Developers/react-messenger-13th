import styled, { css } from 'styled-components';
import { userData } from '../Data';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const Img = styled.img`
  width: 100%;
  height: 100%;
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

const ChatBox = styled.div`
  /* width:100%; */
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 20px;
  box-shadow: -3px 6px 20px -10px rgb(207, 195, 194);
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

const NameItem = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 38%;
  overflow: hidden;
`;

const LastChat = styled.div`
  width: 100%;
  height: 20px;
  margin-left: 30px;
`;
export default function InfoScreen(props) {
  const list = props.list;

  // const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  // function toggleVisibleSearch() {
  //   setIsVisibleSearch(!isVisibleSearch);
  // }
  // const [list2, setList2] = useState(list);
  // const [searchText, setSearchText] = useState('');
  // function setText(e) {
  //   setSearchText(e.target.value);
  // }
  // useEffect(() => {
  //   setList2(
  //     userData.filter((item) => {
  //       return item.name.includes(searchText);
  //     })
  //   );
  // }, [searchText]);

  return (
    <Screen>
      <Header>
        <h3>채팅목록</h3>
        {/* <SearchButton onClick={toggleVisibleSearch}>
          <Img src={process.env.PUBLIC_URL + 'search.png'} />
        </SearchButton> */}
      </Header>
      {/* <Input
        isVisible={isVisibleSearch}
        type="text"
        value={searchText}
        onChange={setText}
      /> */}
      {list.map((item) => {
        return (
          <Link to={`/chatlist/${item.user.id}`}>
            <ChatBox chattingRoom={item}>
              <ProfileImg src={item.user.profileImg} />
              <div>
                <NameItem>{item.user.name}</NameItem>
                <LastChat>
                  {item.chatText[item.chatText.length - 1].text}
                </LastChat>
              </div>
            </ChatBox>
          </Link>
        );
      })}
    </Screen>
  );
}
