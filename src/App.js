import React from 'react';
import styled from 'styled-components';
import ActiveUser from './components/ActiveUser';
import ChatContainer from './components/ChatContainer';
import ChatForm from './components/ChatForm';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: #F2F8FF;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

function App() {

  return (
    <Wrapper>
      <Container>
        <ActiveUser />
        <ChatContainer />
        <ChatForm />
      </Container>
    </Wrapper>
  );
}

export default App;
