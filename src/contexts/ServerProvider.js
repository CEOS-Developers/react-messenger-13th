import React, { useContext } from 'react'

const ServerContext = React.createContext();

export function useServer() {
  return useContext(ServerContext);
}

// VIRTUAL BACKEND SERVER
export default function ServerProvider({ children }) {
  const getRooms = () => {
    // return rooms;
  }

  const getRoomById = (roomId) => {
    // const filteredRooms = rooms.filter(room => room.roomId === roomId);
    // if (filteredRooms.length > 0) {
    //   return filteredRooms[0];
    // } else {
    //   return false;
    // }
  }

  const getUsers = () => {
    // return users;
  }

  const getUserById = (userId) => {
    // const filteredUsers = users.filter(user => user.userId === userId);
    // if(filteredUsers.length > 0) {
    //   return filteredUsers[0];
    // } else {
    //   return false;
    // }
  }

  const sendChat = (userId, roomId, msg) => {

  }

  const inviteToRoom = (userId, roomId) => {

  }

  const leaveRoom = (userId, roomId) => {

  }

  const connectToRoom = (userId, roomId) => {

  }

  const disconnectFromRoom = (userId, roomId) => {

  }

  const createUser = (userId, userName) => {
    // const newUser = new User(userId, userName);
    // return newUser;
  }

  const createRoom = (roomName, participantUserIds) => {
    // const participants = users.filter(user => {
    //   return participantUserIds.includes(user.userId);
    // });
    // rooms.push(new Room(roomName, participants));
  }

  const destroyRoom = (roomId) => {
    // rooms = rooms.filter(room => room.roomId !== roomId);
  }

  const userConnect = (userId) => {
    // const usr = getUserById(userId);
    // usr.currentlyActive = true;
  }

  const userDisconnect = (userId) => {
    // const usr = getUserById(userId);
    // usr.currentlyActive = false;
    // usr.lastActive = new Date();
  }

  const value = {
    getRooms, getRoomById, getUsers, getUserById,
    sendChat, inviteToRoom, leaveRoom, connectToRoom, disconnectFromRoom, 
    createUser, createRoom, destroyRoom, userConnect, userDisconnect
  }

  return (
    <ServerContext.Provider value={value}>
      { children }
    </ServerContext.Provider>
  )
}
