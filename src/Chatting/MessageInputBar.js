import React, { useState } from "react";
import styled from "styled-components";

const MessageInputContainer = styled.div`
  color: grey;
  display: flex;
  margin: 1% 0% 0% 8vw;
  border-top: solid 1px #d16f80;
  align-items: stretch;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #e99ba7;
`;

const MessageInputBox = styled.input`
  color: grey;
  width: 78vw;
  height: 40px;
  margin: 1% 0% 1% 2%;
  border: 0.5px #d16f80 solid;
  text-align: center;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;
const MessageInputButton = styled.button`
  color: #f4f4f4;
  width: 9vw;
  height: 44px;
  border-radius: 10px;
  background-color: #ba4f5f;
  border: 0.5px #ba4f5f solid;
  text-align: center;
  margin: 1%;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #d16f80;
  }
`;

export default function MessageInputBar({ clickInputButton }) {
  const [messageUserInput, setMessageUserInput] = useState("");

  function enterPressed(e) {
    if (e.key === "Enter") {
      handleClickInputButton();
    }
  }

  function handleChange(e) {
    setMessageUserInput(e.target.value);
  }

  function handleClickInputButton() {
    if (messageUserInput !== "") {
      clickInputButton(messageUserInput);
      setMessageUserInput("");
    }
  }
  return (
    <MessageInputContainer>
      <MessageInputBox
        placeholder="message"
        value={messageUserInput}
        onChange={handleChange}
        onKeyPress={enterPressed}
      />
      <MessageInputButton onClick={handleClickInputButton}>
        send
      </MessageInputButton>
    </MessageInputContainer>
  );
}
