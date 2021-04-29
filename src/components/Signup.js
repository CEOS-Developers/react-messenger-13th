import React, { useState } from 'react'
import { ChatLeftFill } from 'react-bootstrap-icons';
import styled from 'styled-components'
import { useContacts } from '../contexts/ContactsProvider';

const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #0E388A;
  }
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0 25px;

  & label {
    margin: 8px 0;
    color: black;
  }

  & input {
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 1rem;
    text-align: left;

    &:focus {
      border: 1px solid #0E388A;
    }
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
`;

export default function Signup() {
  const { createAccount } = useContacts();
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputStatusMsg, setInputStatusMsg] = useState('');

  const validateSignupForm = () => {
    let validate = true;
    if(inputId === '') validate = false;
    if(inputName === '') validate = false;
    return validate;
  }

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    if(validateSignupForm()) {
      if(window.confirm(`'${inputId}?' ID로 계정을 생성하시겠습니까?`)) {
        if(createAccount(inputId, inputName, inputStatusMsg)) {
          setInputId('')
          setInputName('')
          setInputStatusMsg('');
          window.location="/friends";
        } else {
          alert("[Error] Account creation failed.")
        }
      }
    }
  }

  return (
    <StyledLogin>
      <ChatLeftFill style={{ fontSize: '7rem', color: '#0E388A' }} />
      <h1>CEOS Talk</h1>
      <SignupForm onSubmit={handleSignupFormSubmit}>
        <label htmlFor="userId">CEOSTalk ID</label>
        <input 
          type="text"
          name="userId"
          placeholder="Enter ID"
          value={inputId}
          onChange={(e) => { setInputId(e.target.value) }}
        />
        <label htmlFor="userName">Name</label>
        <input 
          type="text"
          name="userName"
          placeholder="Enter Name"
          value={inputName}
          onChange={(e) => { setInputName(e.target.value) }}
        />
        <label htmlFor="statusMsg">Status Message</label>
        <input 
          type="text"
          name="statusMsg"
          placeholder="Enter your status"
          value={inputStatusMsg}
          onChange={(e) => { setInputStatusMsg(e.target.value) }}
        />
        <button 
          className={ validateSignupForm() ? "" : "disabled" } 
          type="submit"
        >
          Create Account
        </button>
      </SignupForm>
    </StyledLogin>
  )
}
