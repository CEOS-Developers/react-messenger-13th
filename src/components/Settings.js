import React, { useState } from 'react'
import styled from 'styled-components'
import { useContacts } from '../contexts/ContactsProvider';

const StyledSettings = styled.div`
  padding: 10px 25px;
  & h2 {
    margin: 10px 0 20px 0;
  }
  & h2:first-of-type {
    margin-top: 0;
  }

  & button {
    padding: 10px 15px;
    font-size: 1.1rem;
    border: 1.5px solid #0E388A;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background: #0E388A;
    color: white;
    margin-bottom: 10px;

    &.secondary {
      color: #0E388A;
      background: white;
    }
    &.disabled {
      cursor: auto;
      color: white;
      border-color: lightgray;
      background: lightgray;
    }
    &:first-of-type {
      margin-top: 20px;
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  & label {
    color: black;
    margin: 0 0 5px 0;
  }
  & input {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 1em;
  }
  & input:focus {
    border-color: #0E388A;
  }
`;

export default function Settings() {
  const { currentUser, changeUserId, changeUserName } = useContacts();
  const [idInput, setIdInput] = useState(currentUser.userId)
  const [nameInput, setNameInput] = useState(currentUser.userName)

  const unsavedChangesExist = (
    (currentUser.userId !== idInput) ||
    (currentUser.userName !== nameInput)
  )

  const handleSaveChangesClick = () => {
    if(unsavedChangesExist && window.confirm("변경사항을 저장하시겠습니까?")) {
      if(currentUser.userId !== idInput) {
        changeUserId(currentUser.userId, idInput);
      }
      if(currentUser.userName !== nameInput) {
        changeUserName(currentUser.userId, nameInput);
      }
    }
  }

  const handleInputChange = (e) => {
    if(e.target.name === 'userId') setIdInput(e.target.value);
    if(e.target.name === 'userName') setNameInput(e.target.value);
  }

  return (
    <StyledSettings>
      <h2>계정 설정</h2>
      <div>
        <label htmlFor="userId">계정 ID 입력</label>
        <input 
          type="text"
          name="userId"
          id="userId"
          placeholder="계정 ID 입력"
          value={idInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="userName">계정 이름 입력</label>
        <input 
          type="text"
          name="userName"
          id="userName"
          placeholder="계정 이름 입력"
          value={nameInput}
          onChange={handleInputChange}
        />
      </div>
      <button 
        onClick={ handleSaveChangesClick }
        class={ unsavedChangesExist ? '' : 'disabled' }
      >변경사항 저장</button>
    </StyledSettings>
  )
}
