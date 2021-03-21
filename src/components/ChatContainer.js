import React from 'react'
import styled from 'styled-components'

const StyledChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default function ChatContainer() {
  return (
    <StyledChatContainer>
      Chat
    </StyledChatContainer>
  )
}
