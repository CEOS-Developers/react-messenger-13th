import React from 'react';
import Header from './Header';

const userList = [
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
];

export default () => {
  return <Header user={userList[0]} />;
};
