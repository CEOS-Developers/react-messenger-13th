//import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  &:first-of-type {
    border-bottom: 1px solid gray;
  }
`;

const Photo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 18px;
  margin: 5px;
`;

const UserName = styled.div`
  margin-left: 10px;
  font-weight: bold;
`;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function FriendItem(props) {
  if (props.user.id === 0) {
    //user가 나 자신(0)이면 Link component를 렌더하지 않는다
    return (
      <Container>
        <Photo src={props.user.profileImgSrc} />
        <UserName>{props.user.name}</UserName>
      </Container>
    );
  } else {
    return (
      <Link to={`/room/${props.user.id}`}>
        <Container>
          <Photo src={props.user.profileImgSrc} />
          <UserName>{props.user.name}</UserName>
        </Container>
      </Link>
    );
  }
}

export default FriendItem;
