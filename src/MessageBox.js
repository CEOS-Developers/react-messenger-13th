import React from 'react';
import styled from 'styled-components'

const ChattingImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin: 15px 15px 0px 15px; 
`;

const ChattingContext = styled.div`
  padding-left: 20px;
  line-height: 28px;
  font-size: 15px;
  border : 1px solid #e99ba7;
  border-radius : 22px;
  margin : 15px 0px 0px;
  padding : 10px;
  background-color:#f4f4f4;
  color: gray;
`;
const ChattingBubble = styled.div`
  display: flex;
`;

const ChattingContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-top: 97px;
  padding-bottom: 100px;
  background-image : url(${process.env.PUBLIC_URL+'/watercolor.png'});
  background-repeat: repeat; 
`;

function MessageBubble(props) {
  return (
    <ChattingBubble>
      <ChattingImage src={process.env.PUBLIC_URL + "/img.jpg"} alt="" />
      <ChattingContext>hello</ChattingContext>
    </ChattingBubble>
  );
}

export default function MessageBox(props) {
  return (
    <ChattingContainer>
      <MessageBubble/>
    </ChattingContainer>
  );
}