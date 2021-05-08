import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProfileImage = styled.img`
  width: 70px;
  height: 70px;
`;
const StyledText = styled.p`
  margin: 5px 0;
`;

export default ({ item }) => {
  const otherUser =
    item.userList[0].id === 0 ? item.userList[1] : item.userList[0];
  const lastChatList = item.chatList[item.chatList.length - 1];
  const lastChatText = lastChatList.chat[lastChatList.chat.length - 1];
  return (
    <StyledContainer>
      <StyledProfileImage src={otherUser.img} />
      <StyledLabelContainer>
        <StyledText>{otherUser.name}</StyledText>
        <StyledText>{lastChatText}</StyledText>
      </StyledLabelContainer>
    </StyledContainer>
  );
};
