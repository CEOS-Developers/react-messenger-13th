import React, { useState, useContext, useCallback, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

class Room {
  constructor(roomName, participants, roomId, chats, lastReadTime, connectedUsers) {
    const d = new Date();
    if(roomId) { 
      this.roomId = roomId; 
    } else {
      this.roomId = d.getTime(); // Number
    }

    this.roomName = roomName; // String
    this.participants = participants; // Array Users

    if(chats) {
      this.chats = chats;
    } else {
      this.chats = participants.map(user => new Chat('enter', user, '')); // Array Chats
    }

    if(lastReadTime) {
      this.lastReadTime = lastReadTime;
    } else {
      this.lastReadTime = []; // Array { userId: Number(User.userId), time: Date }
    }

    if(connectedUsers) {
      this.connectedUsers = connectedUsers;
    } else {
      this.connectedUsers = []; // Array Numbers (User.userId)
    }
    // this.unreadCount = 0; // Processed client side
    // this.lastChat = Chat; // Client side only
  }

  enterRoom(user) {
    let userAlreadyInRoom = this.participants.filter(p => p.userId === user.userId).length > 0;
    if (!userAlreadyInRoom) {
      this.participants.push(user);
      this.chats.push(new Chat('enter', user, ''));
    }
  }

  leaveRoom(user) {
    console.log(`Room.leaveRoom(${user.userId})`)
    const prevNumParticipants = this.participants.length;
    this.participants = this.participants.filter(p => p.userId !== user.userId);
    if(prevNumParticipants !== this.participants.length) {
      this.chats.push(new Chat('leave', user, ''));
    }
  }

  sendChat(user, content) {
    this.chats.push(new Chat('chat', user, content));
  }

  getRoom() {
    return {
      roomId: this.roomId,
      roomName: this.roomName,
      participants: this.participants.map(user => user.getUser()),
      chats: this.chats.map(chat => chat.getChat()),
      lastReadTime: this.lastReadTime.map(lrt => ({ userId: lrt.userId, time: lrt.time.getTime() })),
      connectedUsers: this.connectedUsers,
    }
  }

  getCopy() {
    return new Room(
      this.roomName, 
      this.participants.slice(), 
      this.roomId, 
      this.chats.slice(), 
      this.lastReadTime.map(lrt => ({ userId: lrt.userId, time: lrt.time })), 
      this.connectedUsers.slice());
  }
}
class Chat {
  constructor(type, user, content, chatId) {
    if(chatId) {
      this.chatId = chatId;
      this.sentTime = new Date(chatId);
    } else {
      const d = new Date();
      this.chatId = d.getTime(); // Number
      this.sentTime = d; // Date
    }
    this.type = type; // String 'enter' || 'leave' || 'chat'
    this.user = user; // User
    this.content = content; // String
    // this.unreadCount = 0; // Processed client side
  }

  getChat() {
    return {
      type: this.type,
      user: this.user.userId,
      content: this.content,
      sentTime: this.sentTime.getTime(),
    }
  }
}

// const fs = require('fs');
// let rawdata = fs.readFileSync('rooms.json');
// let initialRooms = JSON.parse(rawdata);


const RoomsContext = React.createContext();

export function useRooms() {
  return useContext(RoomsContext);
}

// RoomsProvider must be children of ServerProvider and ContactsProvider
export default function RoomsProvider({ children }) {
  const [localRooms, setLocalRooms] = useLocalStorage('rooms', []);
  const { getUserById, userActivity, currentUser } = useContacts(); // Array Users, // Return Type User
  const loadLocalRooms = () => {
    return localRooms.map(room => (
      new Room(
        room.roomName,
        room.participants.map(user => getUserById(user.userId)),
        room.roomId,
        room.chats.map(chat => new Chat(chat.type, getUserById(chat.user), chat.content, chat.sentTime)),
        room.lastReadTime.map(lrt => ({ userId: lrt.userId, time: new Date(lrt.time) })),
        room.connectedUsers.slice()
      )
    ))
  }
  const [rooms, setRooms] = useState(() => (loadLocalRooms())); // Array Rooms
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    setLocalRooms(rooms.map(room => room.getRoom()));
  }, [rooms, setLocalRooms])

  const getRoomById = useCallback((roomId) => {
    const filteredRoom = rooms.filter(room => room.roomId.toString() === roomId.toString());
    if(filteredRoom.length <=0) return false;
    return filteredRoom[0];
  },[rooms])

  const selectRoom = useCallback((roomId) => {
    setSelectedRoom(getRoomById(roomId))
    userActivity(currentUser.userId);
  }, [getRoomById, userActivity, currentUser])

  const deselectRoom = useCallback(() => {
    setSelectedRoom(null)
  }, [])

  const readRoom = (userId, roomId) => {
    const room = getRoomById(roomId);
    const exists = room.lastReadTime.filter(item => item.userId === userId).length > 0;

    // rooms 배열 안 Room 인스턴스의 속성 중 lastReadTime 배열 안 우리가 찾는 유저의 마지막 읽은 시간 업데이트
    setRooms(prevRooms => {
      // 새로운 Rooms 배열을 return
      return prevRooms.map(room => {
        // 우리가 찾던 방만
        if(room.roomId === roomId) {
          let newRoom = room.getCopy();
          if(exists) {
            // 이미 한번 접속해서 읽은 기록이 있는 사용자
            newRoom.lastReadTime = newRoom.lastReadTime.map(lrt => {
              // 우리가 찾는 사용자만
              if(lrt.userId === userId) {
                // 마지막 읽은 시간 업데이트
                return { userId: lrt.userId, time: new Date() }
              } else {
                // 나머지 사용자들은 그대로
                return lrt;
              }
            })
          } else {
            // 처음 방 접속하여 처음 읽는 사용자 - 사용자 엔트리 새롭게 추가
            newRoom.lastReadTime = [...newRoom.lastReadTime, { userId: userId, time: new Date() }]
          }
          return newRoom;
        } else {
          // 나머지 방들은 그대로
          return room;
        }
      })
    })
  }

  const enterRoom = (userId, roomId) => {
    const user = getUserById(userId);

    setRooms(prevRooms => {
      return prevRooms.map(room => {
        if(room.roomId === roomId) {
          // let newRoom = room.getCopy();
          // newRoom.enterRoom(user);
          // return newRoom;
          room.enterRoom(user);
          return room;
        } else {
          return room;
        }
      })
    })
  }

  const leaveRoom = (userId, roomId) => {
    const room = getRoomById(roomId);
    if(room.participants.length <= 1) {
      // delete room when last participant leaves
      setRooms(prevRooms => prevRooms.filter(room => room.roomId !== roomId));
    } else {
      // remove user from room
      const user = getUserById(userId);
  
      setRooms(prevRooms => {
        return prevRooms.map(room => {
          if(room.roomId === roomId) {
            // let newRoom = room.getCopy();
            // newRoom.leaveRoom(user);
            // return newRoom;
            room.leaveRoom(user);
            return room;
          } else {
            return room;
          }
        })
      })
    }
    userActivity(currentUser.userId);
  }

  const sendMessage = (userId, roomId, msg) => {
    // TODO Connect to server and add chat object to specified room
    setRooms(prevRooms => {
      return prevRooms.map(room => {
        if(room.roomId === roomId) {
          const user = getUserById(userId);
          // let newRoom = room.getCopy();
          // newRoom.sendChat(user, msg);
          // return newRoom;
          room.sendChat(user, msg);
          return room;
        } else {
          return room;
        }
      })
    })
  }

  const createRoom = (roomName, participantUserIds) => {
    console.log(`createRoom(${roomName}, ${participantUserIds})`)
    let createRoomFail = false;
    let notFoundUserIds = [];
    const participants = participantUserIds.map(userId => {
      const usr = getUserById(userId);
      if(!usr) {
        createRoomFail = true;
        notFoundUserIds.push(userId);
      }
      return usr;
    });
    if(createRoomFail) {
      let err_msg = '초대하려는 사용자를 찾을 수 없습니다. ('
      for(let i=0; i<notFoundUserIds.length; i++) {
        err_msg += notFoundUserIds[i];
      }
      err_msg += ')';
      alert(err_msg);
      return null;
    } else {
      let newRoom = new Room(roomName, participants);
      setRooms(prevRooms => [...prevRooms, newRoom]);
      return newRoom.roomId;
    }
  }

  const value = {
    rooms, getRoomById,
    sendMessage, createRoom,
    selectedRoom, selectRoom, deselectRoom,
    readRoom, enterRoom, leaveRoom,
  };

  return (
    <RoomsContext.Provider value={value}>
      { children }
    </RoomsContext.Provider>
  )
}
