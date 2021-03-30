import styled from 'styled-components';

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
`;

const ChatText = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default function ChatItem(props) {
  // props = { item: item }

  // props.item = {
  //     chatId: 1,
  //     chatText: '안녕!!',
  //     userId: 1,
  //     profileImg: process.env.PUBLIC_URL + '/logo512.png',
  // }

  const { chatText, profileImg } = props.item;
  // const {chatListData} = props;
  // const chatListData = props.chatListData 둘이 같은거!

  return (
    <ChatBox>
      <Photo src={profileImg} />
      <ChatText>{chatText}</ChatText>
    </ChatBox>
  );
}
