//이름 채팅데이터 아이디 프로필사진

//아이디 내용

export const userData = [
  {
    name: '안건희',
    id: 0,
    profileImg: `${process.env.PUBLIC_URL}/profile1.jpg`,
  },
  {
    name: '고양이',
    id: 1,
    profileImg: `${process.env.PUBLIC_URL}/profile1.jpg`,
  },
  {
    name: '야옹이',
    id: 2,
    profileImg: `${process.env.PUBLIC_URL}/profile1.jpg`,
  },
  {
    name: '겸댕',
    id: 3,
    profileImg: `${process.env.PUBLIC_URL}/profile1.jpg`,
  },
];

export const chatData = [
  {
      user:userData[0],
      id:0,
      chatText:[{
          user: userData[0],
          text:'이렇게 하면 되나'
      },{
          user: userData[1],
          text:'웅야'
      },{
        user: userData[1],
        text:'그렇게 하면 돼'
      }]
  },{
    user:userData[1],
    id:1,
    chatText:[{
        user: userData[0],
        text:'이렇게 하면 되나'
    },{
        user: userData[1],
        text:'웅야'
    },{
      user: userData[1],
      text:'그렇게 하면 돼'
    }]
},{
  user:userData[2],
  id:2,
  chatText:[{
      user: userData[2],
      text:'이렇게 하면 되나'
  },{
      user: userData[1],
      text:'웅야'
  },{
    user: userData[2],
    text:'그렇게 하면 돼'
  }]
},
];
