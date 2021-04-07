import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ececed;
`;

const StyledList = styled.ul`
  padding: 0 20px;
`;

const StyledListItem = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const StyledListItemImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export default () => {
  return (
    <StyledContainer>
      <StyledList>
        <StyledListItem>
          <Link to="/User">
            <StyledListItemImage
              src={`${process.env.PUBLIC_URL}/ic_person.png`}
            />
          </Link>
        </StyledListItem>

        <StyledListItem>
          <Link to="/ChatList">
            <StyledListItemImage
              src={`${process.env.PUBLIC_URL}/ic_chat.png`}
            />
          </Link>
        </StyledListItem>

        <StyledListItem>
          <Link to="/Setting">
            <StyledListItemImage
              src={`${process.env.PUBLIC_URL}/ic_setting.png`}
            />
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledContainer>
  );
};
