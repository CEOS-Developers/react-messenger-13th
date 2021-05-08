import React, { useEffect } from "react";
import styled from "styled-components";

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
  border: 1px solid #e99ba7;
  border-radius: 22px;
  margin: 15px 0px 0px;
  padding: 10px;
  background-color: #f4f4f4;
  color: gray;
`;
const ChattingBubble = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.chattingUser === 2 ? "row-reverse" : "row"};
`;

const ChattingContainer = styled.div`
  width: 92vw;
  height: available;
  flex-grow: 1;
  padding-top: 97px;
  padding-bottom: 100px;
  background-image: url(${process.env.PUBLIC_URL + "/watercolor.png"});
  background-repeat: repeat;
  margin-left: 8vw;
`;

function MessageBubble({ chattingMessage }) {
  return (
    <ChattingBubble chattingUser={chattingMessage.chattingUser}>
      <ChattingImage
        src={
          process.env.PUBLIC_URL + "/" + chattingMessage.chattingUser + ".jpg"
        }
        alt=""
      />
      <ChattingContext>{chattingMessage.messageContext}</ChattingContext>
    </ChattingBubble>
  );
}

export default function MessageBox({ userChattingMessageSet }) {
  useEffect(() => {
    window.scrollBy(0, window.innerHeight);
  });

  return (
    <ChattingContainer>
      {userChattingMessageSet.map((chattingMessage, id) => (
        <MessageBubble chattingMessage={chattingMessage} key={id} />
      ))}
    </ChattingContainer>
  );
}
