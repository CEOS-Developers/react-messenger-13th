import styled from 'styled-components';

const ChatBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.userId === 0 ? 'row' : 'row-reverse')};
  margin-bottom: 15px;
`;
// const name = "정윤선"
// const Text = `저의 이름은 ${name}입니다.`

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

  const { chatText, profileImgSrc, userId } = props.item;
  // const {messages} = props;
  // const messages = props.messages 둘이 같은거!
  // 결론은 const userId = props.item.userId

  return (
    <ChatBox userId={userId}>
      <Photo src={profileImgSrc} />
      <ChatText>{chatText}</ChatText>
    </ChatBox>
  );
}
