import React,{} from 'react';
import { ChatIcon } from './styles';
import styled from 'styled-components';

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
    const {name, message, img} = props;

    return(
        <FriendStateContainer>
            <Icon src = {img} alt="img" />
            <div>
                <Name>{name}</Name>
                {where === 'FriendList' ? <Message>{message}</Message> : <></>}
            </div>
        </FriendStateContainer>
    );
}

export default FriendState;