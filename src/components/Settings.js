import React, { useState } from 'react'
import styled from 'styled-components'
import { useContacts } from '../contexts/ContactsProvider';
import { useRooms } from '../contexts/RoomsProvider';

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
  const { currentUser, changeUserId, changeUserName, changeStatusMsg, initializeLocalUsers } = useContacts();
  const { initializeLocalRooms } = useRooms();
  const [idInput, setIdInput] = useState(currentUser.userId)
  const [nameInput, setNameInput] = useState(currentUser.userName)
  const [statusMsgInput, setStatusMsgInput] = useState(currentUser.statusMsg);

  const unsavedChangesExist = (
    (currentUser.userId !== idInput) ||
    (currentUser.userName !== nameInput) ||
    (currentUser.statusMsg !== statusMsgInput)
  )

  const handleSaveChangesClick = () => {
    if(unsavedChangesExist && window.confirm("변경사항을 저장하시겠습니까?")) {
      if(currentUser.userId !== idInput) {
        changeUserId(currentUser.userId, idInput);
      }
      if(currentUser.userName !== nameInput) {
        changeUserName(currentUser.userId, nameInput);
      }
      if(currentUser.statusMsg !== statusMsgInput) {
        changeStatusMsg(currentUser.userId, statusMsgInput);
      }
    }
  }

  const handleInitDataClick = () => {
    if(window.confirm("회원가입한 유저 목록 및 모든 채팅 기록을 전부 삭제합니다. 계속하시겠습니까?")) {
      initializeLocalRooms();
      initializeLocalUsers();
    }
  }

  return (
    <StyledSettings>
      <h2>계정 설정</h2>
      <div>
        <label htmlFor="userId">계정 ID</label>
        <input 
          type="text"
          name="userId"
          id="userId"
          placeholder="계정 ID 입력"
          value={idInput}
          onChange={(e) => {setIdInput(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="userName">계정 이름</label>
        <input 
          type="text"
          name="userName"
          id="userName"
          placeholder="계정 이름 입력"
          value={nameInput}
          onChange={(e) => {setNameInput(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="statusMsg">상태메세지</label>
        <input 
          type="text"
          name="statusMsg"
          id="statusMsg"
          placeholder="상태메세지 입력"
          value={statusMsgInput}
          onChange={(e) => {setStatusMsgInput(e.target.value)}}
        />
      </div>
      <button 
        onClick={ handleSaveChangesClick }
        className={ unsavedChangesExist ? '' : 'disabled' }
      >{ unsavedChangesExist ? '변경사항 저장' : '변경사항 없음' }</button>
      <br />
      <button
        onClick={ handleInitDataClick }
      >모든 데이터 초기화
      </button>
    </StyledSettings>
  )
}
