import styled from 'styled-components';
import { Fragment, useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Chat from '../Chat/index';
import ChatListItem from './ChatListItem';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledSearchInput = styled.input.attrs({
  type: 'text',
})`
  font-size: 1.5em;
  padding: 10px 20px;
  flex-grow: 1;
`;

const List = ({ chatList }) => {
  const [searchText, setSearchText] = useState('');
  const [chatItemComponents, setChatItemComponents] = useState([]);

  const myChatList = [];
  for (const chatData of chatList) {
    for (const userData of chatData.userList) {
      if (userData.id === 0) {
        myChatList.push(chatData);
        break;
      }
    }
  }

  useEffect(() => {
    const filteredList =
      searchText === ''
        ? myChatList
        : myChatList.filter((item) => {
            if (searchText === '') return true;
            for (const userData of item.userList) {
              if (userData.name.includes(searchText)) return true;
            }
            return false;
          });

    setChatItemComponents(
      filteredList.map((item) => {
        return (
          <Link to={`Chat/${item.id}`}>
            <ChatListItem item={item} />
          </Link>
        );
      })
    );
  }, [searchText]);

  const onSearchTextChanged = (e) => {
    console.log(`_${e.target.value}_`);
    setSearchText(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledSearchForm>
        <StyledSearchInput value={searchText} onChange={onSearchTextChanged} />
      </StyledSearchForm>
      {chatItemComponents}
    </StyledContainer>
  );
};

export default ({ chatList }) => {
  return (
    <Fragment>
      <Switch>
        <Route
          path="/chat/:id"
          render={(props) => <Chat {...props} datas={chatList} />}
        />
        <Route
          path="/chat"
          render={(props) => <List chatList={chatList} />}
          exact
        />
      </Switch>
    </Fragment>
  );
};
