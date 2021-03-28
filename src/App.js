import React from 'react';
import TopBar from './TopBar'
import MessageBox from './MessageBox'
import MessageInputBar from './MessageInputBar'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  function clickInputButton() {
    
  }

  return (
    <Container >
      <TopBar />
      <MessageBox />
      <MessageInputBar clickInputButton={clickInputButton}/>
    </Container>
  );
}

export default App;
