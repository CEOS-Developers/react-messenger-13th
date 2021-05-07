import styled from 'styled-components';
import SettingScreen from './SettingScreen';

const Container = styled.div`
  display:flex;
  flex-direction:row;
  height: 100%;
`;

function Index(){
    return(
        <Container>
          <SettingScreen/>
        </Container>
    );
}

export default Index;