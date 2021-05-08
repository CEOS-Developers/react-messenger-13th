import styled from 'styled-components';
import { Fragment, useEffect, useState } from 'react';
import UserListItem from './UserListItem';

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

export default ({ userList }) => {
  const [searchText, setSearchText] = useState('');
  const [componentList, setComponentList] = useState([]);

  const friendList = [];
  for (const userData of userList) {
    if (userData.id !== 0) {
      friendList.push(userData);
    }
  }

  useEffect(() => {
    const filteredList =
      searchText === ''
        ? friendList
        : friendList.filter((item) => {
            if (searchText === '') return true;
            if (item.name.includes(searchText)) return true;

            return false;
          });

    setComponentList(
      filteredList.map((item, index) => {
        return <UserListItem user={item} />;
      })
    );
  }, [searchText]);

  const onSearchTextChanged = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledSearchForm>
        <StyledSearchInput value={searchText} onChange={onSearchTextChanged} />
      </StyledSearchForm>
      {componentList}
    </StyledContainer>
  );
};
