import styled from 'styled-components';
import ChatItemContainer from './ChatItemsContainer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-bottom: 20px;
`;

export default (props) => {
  const list = props.chatData.map((item) => {
    return <ChatItemContainer chatList={item.chatList} user={item.user} />;
  });

  return <StyledContainer>{list}</StyledContainer>;
};
