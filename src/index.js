import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatInput from './ChatInput';

ReactDOM.render(
  <React.StrictMode>
    <ChatInput>Hello</ChatInput>
  </React.StrictMode>,
  document.getElementById('root')
);
