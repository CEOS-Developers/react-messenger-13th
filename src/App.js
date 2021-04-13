import React from 'react';
import {
  Route
} from "react-router-dom";
import styled from 'styled-components';
import ChattingView from './MessageChattingView';
import ChattingList from './ChattingListView';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function App() {

  return (
    <Container >
      <Route path="/" component={ChattingList} exact={true}/>
      <Route path="/chatting-list" component={ChattingView}/>
    </Container>
  );
}

export default App;
