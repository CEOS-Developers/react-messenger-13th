import React, { useState } from 'react'
import { ChatLeftFill } from 'react-bootstrap-icons';
import styled from 'styled-components'
import { useContacts } from '../contexts/ContactsProvider';
import { Redirect } from 'react-router'

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

const LoginForm = styled.form`
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
    margin-bottom: 15px;

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
      margin-top: 15px;
    }
  }
`;

export default function Login() {
  const { getUserById, currentUser, selectUser } = useContacts();
  const [inputId, setInputId] = useState('');

  const validateLoginForm = () => {
    let validate = true;
    if(inputId === '') validate = false;
    return validate;
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if(validateLoginForm()) {
      let searchUser = getUserById(inputId);
      if(searchUser) {
        // login
        selectUser(inputId);
        setInputId('');
      } else {
        if(window.confirm(`User with ID '${inputId}' not found. Create account?`)) {
          window.location="/signup";
        }
      }
    }
  }

  const handleSignupButtonClick = (e) => {
    e.preventDefault();
    window.location = "/signup";
  }

  if(currentUser !== null) return (<Redirect to="/friends"/>);

  return (
    <StyledLogin>
      <ChatLeftFill style={{ fontSize: '7rem', color: '#0E388A' }} />
      <h1>CEOS Talk</h1>
      <LoginForm onSubmit={handleLoginFormSubmit}>
        <label htmlFor="userId">CEOSTalk ID</label>
        <input 
          type="text"
          name="userId"
          placeholder="Enter ID"
          value={inputId}
          onChange={(e) => { setInputId(e.target.value) }}
        />
        <button 
          type="submit" 
          className={ validateLoginForm() ? "" : "disabled" }
        >
          Login
        </button>
        <button 
          className="secondary"
          onClick={handleSignupButtonClick}
        >
          Create Account
        </button>
      </LoginForm>
    </StyledLogin>
  )
}
