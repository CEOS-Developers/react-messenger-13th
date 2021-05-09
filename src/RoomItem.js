//import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid gray;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 18px;
  margin: 5px;
`;

const UserName = styled.div`
  margin: 0 0 3px 10px;
  font-weight: bold;
`;

const LastMessage = styled.div`
  margin-left: 10px;
`;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function RoomItem(props) {
  return (
    <Link to={`/room/${props.user.id}`}>
      <Container>
        <Photo src={props.user.profileImgSrc} />
        <ChatInfo>
          <UserName>{props.user.name}</UserName>
          <LastMessage>{props.lastMessage}</LastMessage>
        </ChatInfo>
      </Container>
    </Link>
  );
}

export default RoomItem;
