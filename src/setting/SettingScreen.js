import { findAllInRenderedTree } from 'react-dom/test-utils'; //이거 지우면 왜 warning 뜨는지
import styled, { css } from 'styled-components';
//폰트 바꾸기
const Screen = styled.div`
  position: fixed;
  left: 70px;
  /* margin-left: 30px; */
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  width: 100%; //100%왜 안되는지
  justify-content: space-between;
  align-items: baseline;
  color: rgb(62, 39, 35);
  /* box-sizing: border-box; */
`;

const IndexImg = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 60px;
  margin-bottom: 60px;
  //사진 가운데 정렬 어떻게 하는지-왜 align items 안먹는지
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 30px;
`;

const MenuContent = styled.div`
  color: rgb(62, 39, 35);
  font-size: 16px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; //여기도 뭐가 문젠지
  width: 100%;
  /* box-sizing: border-box; */
`;

const Button = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: rgb(255, 235, 59);
  color: rgb(62, 39, 35);
  font-size: 15px;
  border-radius: 30px;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;
export default function SettingScreen() {
  function updateAlert() {
    alert('최신버전으로 업데이트 되었습니다. ');
  }
  return (
    <Screen>
      <Header>
        <h3>더보기</h3> <h4>Ver. 2.6.6</h4>
      </Header>
      <IndexImg src={process.env.PUBLIC_URL + 'kakaoImg.png'} align="center" />
      <Menu>
        <MenuContent>새소식</MenuContent>
        <MenuContent>공지사항</MenuContent>
        <MenuContent>환경설정</MenuContent>
        <MenuContent>도움말</MenuContent>
        <MenuContent>
          카카오톡 정보
          <Button onClick={updateAlert}>업데이트</Button>
        </MenuContent>
      </Menu>
    </Screen>
  );
}
