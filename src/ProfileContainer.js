import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: row;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
`;

const UserInfoContainer = styled.div``;

const UserName = styled.div``;

const UserStatus = styled.div``;

// <ProfileContainer ProfileImgData={messages} /> App.js에 추가하면 안되나...
function ProfileContainer(props) {
  function handleClick() {
    props.toggleCurrentUser();
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
