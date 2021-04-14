import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchChatting = styled.input`
  height: 3vh;
  width: 70vw;
  border: 0.5px #e99ba7 solid;
  border-radius: 7px;
  padding: 1px 1.5vw;
  background-color: #ecd0d0;
  &:focus {
    outline: none;
  }
`;

const ChattingListContainer = styled.div`
  padding-left: 9vw;
  margin-bottom: 1vh;
`;

function ChattingListTopBar({ searchUser, viewTitle }) {
  const [searchUserInput, setSearchUserInput] = useState("");

  function handleChange(e) {
    setSearchUserInput(e.target.value);
  }

  useEffect(() => {
    searchUser(searchUserInput);
  }, [searchUserInput]);

  return (
    <ChattingListContainer>
      <h1>{viewTitle}</h1>
      <form>
        <SearchChatting
          name="search"
          placeholder="참여자 검색"
          onChange={handleChange}
        />
      </form>
    </ChattingListContainer>
  );
}

export default ChattingListTopBar;
