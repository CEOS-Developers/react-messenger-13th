import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatItemContainer from './ChatItemsContainer';
import * as ReactDOM from 'react-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-bottom: 20px;
`;

export default (props) => {
  const lastItem = useRef();
  const container = useRef();

  const list = props.chatData.map((item, index) => {
    return (
      <ChatItemContainer
        chatList={item.chatList}
        user={item.user}
        ownerUserId={props.ownerUserId}
        ref={index === props.chatData.length - 1 ? lastItem : undefined}
      />
    );
  });

  useEffect(() => {
    const node = ReactDOM.findDOMNode(container.current);
    const calculatedHeight = node.clientHeight;

    window.scrollTo({
      top: calculatedHeight,
      behavior: 'smooth',
    });
  });

  return <StyledContainer ref={container}>{list}</StyledContainer>;
};
