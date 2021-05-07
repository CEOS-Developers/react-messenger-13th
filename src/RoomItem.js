//import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 40px;
  border: 1px solid black;
  margin: 30px;
`;

const UserName = styled.div``;

const LastMessage = styled.div``;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function RoomItem(props) {
  return (
    <Link to={`/room/${props.user.id}`}>
      <Container>
        <Photo src={props.user.profileImgSrc} />
        <UserName>{props.user.name}</UserName>
        <LastMessage>{props.lastmessage}</LastMessage>
      </Container>
    </Link>
  );
}

export default RoomItem;
