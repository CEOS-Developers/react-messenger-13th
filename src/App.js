import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import ChattingList from './ChattingList';
import Navigation from './Navigation';
import FriendList from './FriendList';
import SettingPage from './SettingPage';
import ChattingScreen from './ChattingScreen';
import Home from './Home';
import './App.css';

const App = () =>{
    return (
      <HashRouter>
       <Navigation />
       <Route path="/" exact={true} component={Home} />
       <Route path="/friend-list" component={FriendList} />
       <Route path="/chatting-list" component={ChattingList} />
       <Route path="/setting-page" component={SettingPage} />
       <Route path="/chatting-screen/:id" component={ChattingScreen}/>
      </HashRouter>
    );
  }

export default App;
