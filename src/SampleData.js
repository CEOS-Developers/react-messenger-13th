export const userList = [
  {
    id: 0,
    img: `${process.env.PUBLIC_URL}/muji.jpg`,
    name: '무지',
    status: '현재 접속 중',
  },
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/corn.png`,
    name: '콘',
    status: '현재 접속 중',
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/tube.jpg`,
    name: '튜브',
    status: '현재 접속 중',
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/lion.png`,
    name: '라이언',
    status: '현재 접속 중',
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/frodo.png`,
    name: '프로도',
    status: '현재 접속 중',
  },
  {
    id: 5,
    img: `${process.env.PUBLIC_URL}/apeach.png`,
    name: '어피치',
    status: '현재 접속 중',
  },
];

export const sampleChatList = [
  {
    userList: [userList[0], userList[1]],
    chatList: [
      {
        user: userList[0],
        chat: ['안녕하세요', '열심히 하겠습니다.'],
      },
    ],
  },
  {
    userList: [userList[0], userList[2]],
    chatList: [
      {
        user: userList[0],
        chat: ['안녕하세요', '열심히 하겠습니다.'],
      },
    ],
  },
  {
    userList: [userList[0], userList[3]],
    chatList: [
      {
        user: userList[0],
        chat: ['안녕하세요', '열심히 하겠습니다.'],
      },
    ],
  },
  {
    userList: [userList[0], userList[3]],
    chatList: [
      {
        user: userList[0],
        chat: ['안녕하세요', '열심히 하겠습니다.'],
      },
    ],
  },
];
