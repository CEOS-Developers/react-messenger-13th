import styled from 'styled-components';
import Screen from './Screen';

const Container = styled.div`
  display:flex;
  flex-direction:row;
  height: 100%;
`;

function Index(props){
  
    return(
        <Container>
          <Screen {...props} />
        </Container>
    );
}

export default Index;