import React, { useState, useEffect } from 'react'
import { useContacts } from '../contexts/ContactsProvider'
import styled from 'styled-components';
import FriendListItem from './FriendListItem';
import { Link } from 'react-router-dom';

const StyledFriendList = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 1.2em;
    margin: 30px 25px 10px 25px;
  }
  & h2:first-of-type {
    margin-top: 0;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 15px;
  border-radius: 5px;
  background: #E3E3E3;
  font-size: 1em;
  margin: 0 15px 20px 15px;
  text-align: center;
  &:focus {
    text-align: left;
  }
`;


export default function FriendList() {
  const { users, currentUser } = useContacts();
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchUserById, setSearchUserById] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setFilteredUsers(() => (
      users.filter(user => {
        if(searchUserById) {
          return user.userId.includes(searchQuery.slice(1))
        } else {
          return user.userName.includes(searchQuery)
        }
      })
    ))
  }, [searchQuery, searchUserById, users])

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchUserById(() => {
      if(e.target.value === '') return false;
      return e.target.value[0] === '@';
    })
  }

  return (
    <StyledFriendList>
      <SearchInput 
        type="text" 
        placeholder="친구 @아이디 또는 이름 검색..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      {
        searchQuery === ''
        ? (
          <>
            <h2>내 프로필</h2>
            {filteredUsers.filter(user => user.userId === currentUser.userId).map((user, idx) => (
              <Link to={`/friend/${user.userId}`} key={idx}>
                <FriendListItem user={user} key={idx}/>
              </Link>
            ))}
            <h2>친구({filteredUsers.length - 1})</h2>
          </>
        )
        : ('')
      }
      {filteredUsers.filter((user) => user.userId !== currentUser.userId).map((user, idx) => (
        <Link to={`/friend/${user.userId}`} key={idx}>
          <FriendListItem user={user} />
        </Link>
      ))}
    </StyledFriendList>
  )
}
