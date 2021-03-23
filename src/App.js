import React, { useState } from 'react';
import Top from './Top';

function App() {
  const [isMe, setIsMe] = useState(true);


  const onClickTop = () => {
    setIsMe(!isMe);
  }
  return (
    <>
    <div onClick={onClickTop}>
      <Top isMe={isMe}/>
    </div>
    </>
  );
}

export default App;
