import styled from 'styled-components';
import InfoScreen from './InfoScreen';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

function Index() {
  return (
    <Container>
      <InfoScreen />
    </Container>
  );
}

export default Index;
