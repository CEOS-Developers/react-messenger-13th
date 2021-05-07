import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  width: 70px;
  height: calc(100% - 50px);
  background-color: rgb(66, 54, 48);
  padding-top: 25px;
  display:flex;
  flex-direction:column;
  align-content: center;
  justify-content: space-between; 
  padding-bottom: 25px;
`;

const Contents = styled.img`
  margin-left: 22px;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 26px;
  height: 26px;
`;

const MiniContents = styled.img`
  width: 18px;
  height:18px;
  margin-left: 26px;
  margin-top:8px;
  margin-bottom:8px;
`;
export default function MenuBar() {
  return (
    <Container>
      <div>
       <Link to="/">
          <Contents src={process.env.PUBLIC_URL + 'person.png'} />
       </Link>
        <Link to="/chatlist">
          <Contents src={process.env.PUBLIC_URL + 'chat.png'} />
        </Link>
        <Link to="/setting">
          <Contents src={process.env.PUBLIC_URL + 'setting.png'} />
        </Link>
      </div>
      <div>
        <MiniContents src={process.env.PUBLIC_URL + `calendar.png`}/>
        <MiniContents src={process.env.PUBLIC_URL + `bell.png`}/>
        <MiniContents src={process.env.PUBLIC_URL + `settingImg.png`}/>
      </div>
    </Container>
  );
}
