import styled from 'styled-components';
import ChatItem from './ChatItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `;

// ChatList = ChatItem 들 다 모아놓은 곳
// ChatItem = 프사+메세지 포함하는 상자


export default function ChatList(props){
    const {chatListData} = props;
    // const chatListData = props.chatListData 10번줄이랑 같은거당

    const list = chatListData.map((item) =>{
        return <ChatItem item={item}/>;
    })

    // function mapItem(item) {
    //     return <ChatItem item={item} />>
    // }

    // const list = chatListData.map(mapItem);

    // function map(_function) {
    //     return 
    // }

    return (
        <Container>
            {list}
        </Container>
    )
};
