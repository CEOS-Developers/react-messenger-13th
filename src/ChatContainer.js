import styled from 'styled-components';
import ChatItemContainer from './ChatItemsContainer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default (props) => {
  const list = props.chatData.map((item) => {
    return <ChatItemContainer chatList={item.chatList} user={item.user} />;
  });

  return <StyledContainer>{list}</StyledContainer>;
};
