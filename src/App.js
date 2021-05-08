import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MessageChattingView from "./Chatting/MessageChattingView";
import ChattingList from "./ChattingList/ChattingListView";
import MoreView from "./MoreView";
import ProfileListView from "./UserProfile/ProfileListView";
import MenuBar from "./MenuBar";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Route path="/" component={MenuBar} />
      <Route path="/profile" component={ProfileListView} />
      <Route path="/chatting-list" component={ChattingList} />
      <Route path="/chat-with/:userID" component={MessageChattingView} />
      <Route path="/more" component={MoreView} />
    </Container>
  );
}

export default App;
