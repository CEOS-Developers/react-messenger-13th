import styled, {css} from 'styled-components';
process.env.CI = false;
const ChatItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    align-items: flex-end;
    ${(props) =>
        props.isMine && // && 요게 참이면 아래거 해라
            css`flex-direction:row-reverse;` 
    }
`;

const ProfileImg = styled.img`
    width:50px;
    height:50px;   
    border-radius: 50%; 
    margin:5px;
    box-shadow: 5px 5px 20px 1px rgb(207, 195, 194);
`;

const ChatContent = styled.p`
    border: 2px solid rgb(232, 180, 102);
    background-color: rgb(247, 193, 201);
    border-radius: 30px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 15px;
    
`;
const ChatTime = styled.p`
    padding-bottom: 10px;
    font-size: 6px;
    font-style: grey;
`;
export default function(props){
    const {currentTime, chatText, userId, profileImg} = props.chatItem

    return <ChatItem isMine={userId == 0}>
        <ProfileImg src={profileImg} ></ProfileImg>
        <ChatContent>{chatText}</ChatContent>
        <ChatTime>{currentTime}</ChatTime>
    </ChatItem>
}; 