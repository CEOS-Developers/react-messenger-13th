import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(245, 245, 245);
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

const UserInfoContainer = styled.div``;

const UserName = styled.div``;

const UserStatus = styled.div``;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function ProfileContainer(props) {
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
