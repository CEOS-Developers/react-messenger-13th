import React from 'react';
import styled from 'styled-components';


const StyledMessage = styled.div`
    
    display: flex;
    flex-direction: ${props => props.message.isUser===1? "row-reverse" : "row"};
    & div {
        background-color: white;
        border : 1px solid pink;
        padding: 10px;
        margin: 20px;
        border-radius : 10px;
        max-width: 500px;
    }
    & img {
        margin: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        align: center;
        box-shadow: rgb(50, 50, 50);
    }
`;

const Message = (props) => {
    const {message, user} = props;
    
    return (
        message.receiver===1 ? 
        <StyledMessage {...props}>
            <img src={process.env.PUBLIC_URL+"profile1.jpg"} alt="transmitter"/>
            <div>
               {message.text}
            </div>
        </StyledMessage> :
            <StyledMessage {...props}>
            <img src={process.env.PUBLIC_URL+"profile"+message.isUser+".jpg"} alt="transmitter"/>
            <div>
                {message.text}
            </div>
        </StyledMessage> 
    );
}

export default Message;