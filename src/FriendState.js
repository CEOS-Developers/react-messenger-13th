import React,{} from 'react';
import styled from 'styled-components';
import ChatData from './ChatData.json';

const FriendStateContainer = styled.div`
    display : flex;
    padding: 5px;
    &:hover {
        background: #EBFBFF;
    }
`;
const Icon = styled.img`
    width: 40px;
    height: 40px;
`;
const Name = styled.div`
    padding-left: 5px;
`;
const Message = styled.div`
    padding-left: 10px;
    color: gray;
    font-size: 12px;
`;

const FriendState = ({props, where}) => {
    const {id, name, message, img} = props;
    const lastChat = ChatData[id][ChatData[id].length-1].text;
    return(
        <FriendStateContainer>
            <Icon src = {img} alt="img" />
            <div>
                <Name>{name}</Name>
                {where === 'FriendList' ? <Message>{message}</Message> : <Message>{lastChat}</Message>}
            </div>
        </FriendStateContainer>
    );
}

export default FriendState;