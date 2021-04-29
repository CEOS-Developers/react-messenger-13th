import React from 'react';
import styled from 'styled-components';



const StyledProfileSetting = styled.div`
    margin-left : 119px;
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: row;
    background-color: snow;
    position: fixed;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    & img {
        width: 150px;
        height:150px;
        border-radius: 50%;
        margin-left: 180px;
        margin-top: 50px;
    }
    & input {
        height: 40px;
        width: 300px;
        margin: 15px;
        border-radius: 2px;
        border: 0.5px solid lightgrey;
    }
    & a {
        display: flex;
        flex-direction: row;
        margin-left: 100px;
        margin-top: 10px;
        float: right;
    }
    & h2{
        font-size: 20px;
    }
    & h3 {
        margin-left: 167px;
        color: #0095f6;
    }
`;
const StyledSettingMenuBar = styled.div`
    background-color: snow;
    height: 100%;
    width: 31%;
    float: right;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    & h2 {
        font-size: 20px;
        margin-left: 20px;
        margin-top : 30px;
        margin-bottom: 30px;
        font-weight: light;
    }
`;
function SettingPage(){
    const handleClick = () => {
        alert('정말 바꾸시겠습니까?');
    }
    return(
        <div>
        <StyledProfileSetting>
            <div>
            <img src="profile1.jpg"></img>
            <h3 onClick = {handleClick}>프로필 사진 바꾸기</h3>
            </div>
            <div>
            <a>
                <h2>이름  </h2>
                <input type="text" defaultValue="이소정"></input>
            </a>
            <a>
                <h2>사용자 이름  </h2>
                <input type="text" defaultValue="kather0220"></input>
            </a>
                <a>
                <h2>이메일  </h2>
                <input type="text" defaultValue="kather0220@ewhain.net"></input>
                </a>
                <a>
                <h2>전화번호  </h2>
                <input type="text" defaultValue="+82 10-2000-0220"></input>
                </a>
                <a>
                <h2>상태메시지  </h2>
                <input type="text" defaultValue="프론트 화이팅"></input>
                </a>
            </div>
        </StyledProfileSetting>
        <StyledSettingMenuBar>
            <h2>프로필 편집</h2>
            <h2>비밀번호 변경</h2>
            <h2>앱 및 웹사이트</h2>
            <h2>이메일 및 SNS</h2>
            <h2>푸시 알림</h2>
            <h2>공개 범위 및 보안</h2>
            <h2>로그인 활동</h2>
            <h2>Jungstagram 에서 보낸 이메일</h2>
        </StyledSettingMenuBar>
        </div>
    );
}
export default SettingPage;