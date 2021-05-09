import { useParams } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: row;
  align-item: center;
  border-bottom: 1px solid black;
`;

const Photo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  border: 1px solid black;
  margin: 10px;
`;

const UserInfoContainer = styled.div`
  margin-left: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 1.2em;
  margin-bottom: 3px;
  font-weight: bold;
`;

const UserStatus = styled.div``;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function ProfileContainer(props) {
  const { roomId } = useParams();
  
  function handleClick() {
    props.toggleCurrentUser(roomId);
  }
  return (
    <Container onClick={handleClick}>
      <Photo src={props.currentUser.profileImgSrc} />
      <UserInfoContainer>
        <UserName>{props.currentUser.name}</UserName>
        <UserStatus>현재 활동 중</UserStatus>
      </UserInfoContainer>
    </Container>
  );
}

export default ProfileContainer;
