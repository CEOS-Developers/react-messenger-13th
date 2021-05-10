import { Switch, Route } from 'react-router';
import ChatRoom from './components/ChatRoom';
import ChatRoomList from './components/ChatRoomList';
import FriendList from './components/FriendList';
import FriendProfile from './components/FriendProfile';
import Login from './components/Login';
import Page404 from './components/Page404';
import ContactsProvider from './contexts/ContactsProvider';
import RoomsProvider from './contexts/RoomsProvider';
import Settings from './components/Settings';
import Home from './components/Home';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import RequireLogin from './components/RequireLogin';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #f0f0f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 900px;
  background: white;
  padding: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  overflow-y: scroll;
`;

function App() {
  return (
    <ContactsProvider>
      <RoomsProvider>
        <Wrapper>
          <Container>
            <Navbar />
            <Content>
              <Switch>
                <Route path="/room/:id">
                  <RequireLogin>
                    <ChatRoom />
                  </RequireLogin>
                </Route>
                <Route path="/rooms">
                  <RequireLogin>
                    <ChatRoomList />
                  </RequireLogin>
                </Route>
                <Route path="/friend/:id">
                  <FriendProfile />
                </Route>
                <Route path="/friends">
                  <RequireLogin>
                    <FriendList />
                  </RequireLogin>
                </Route>
                <Route path="/settings">
                  <RequireLogin>
                    <Settings />
                  </RequireLogin>
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/auth/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </Content>
          </Container>
        </Wrapper>
      </RoomsProvider>
    </ContactsProvider>
  );
}

export default App;
