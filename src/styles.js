import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const TopContainer = styled.div`
    background: #dcdcdc;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 15px;
    height: 80px;
    position: fixed;
    top: 0px;
    width: 100%;
    border-bottom: solid 1px;
`;

export const TopIcon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 40%;
`;

export const TopUl = styled.div`

`

export const WhiteChat = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    padding: 5px;
    div {
        background-color: #FFFA78;
        border: ;
    }
`
export const BlackChat = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    padding: 5px;
    div {
        border: solid 1px #dcdcdc;
    }
`
export const ChatIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 50px;
`

export const Text = styled.div`
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`

 export const StyledForm = styled.form`
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: white;
    justify-content: center;
    white-space: nowrap;
    align-items: center;
`

export const Input = styled.input`
    width: 70vw;
    margin: 10px;
    margin-left: 0px;
    height: 30px;
    border: solid 1px #dcdcdc;
    border-radius: 10%;
`

export const Button = styled.button`
    width: 10vw;
    height: 35px;
    background: yellow;
    border: 0;
    border-radius: 20px;
`