import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import ChattingList from './ChattingList';
import Navigation from './Navigation';
import FriendList from './FriendList';
import SettingPage from './SettingPage';

const App = () =>{
    return (
      <HashRouter>
       <Navigation />
       <Route path="/" exact={true} component={FriendList} />
       <Route path="/chatting-list" component={ChattingList} />
       <Route path="/setting-page" component={SettingPage} />
      </HashRouter>
    );
  }

export default App;