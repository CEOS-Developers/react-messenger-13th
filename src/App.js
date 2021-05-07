import { React, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { chatData } from './Data';
import Chat from './chat/Index';
import Main from './main/Index';
import ChatList from './chatList/Index';
import Setting from './setting/Index';
import MenuBar from './MenuBar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function ChatOutput(){
  let {user} = useParams();
  return <div> {user} </div>;
}
export default function App(props) {
  const [list, setList] = useState(chatData);
  return (
    <Router>
      <Container>
        <Link to="/"></Link>
        <Link to="/chat"></Link>
        <Link to="/chatlist"></Link>
        <Link to="/setting"></Link>
        <Route path={['/', '/chatlist', '/setting']} component={MenuBar} />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chatlist/:id" component={Chat} />
          {/* <Route path="/chat/:user" component={Chat} />
            <ChatOutput/> */}
          <Route
            path="/chatlist"
            render={(props) => <ChatList {...props} list={list} />}
          />
          <Route path="/setting" component={Setting} />
        </Switch>
      </Container>
    </Router>
  );
}
