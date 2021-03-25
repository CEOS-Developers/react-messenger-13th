import React, {useState} from 'react';


const Form = ({ isMe, upLoadChatting, chatting }) => {
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (text==='') {
            alert('type something!!')
            return;
        }
        upLoadChatting([...chatting, {isMe, text}])
        setText('');
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input placeholder="Message..." value={text} onChange={onChangeText} />
            <button>전송</button>
        </form>
    );
}

export default Form;