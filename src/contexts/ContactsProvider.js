import React, { useCallback, useContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export class User {
  constructor(userId, userName, statusMsg='', currentlyActive=false, lastActive) {
    this.userId = userId; //String
    this.userName = userName; //String
    this.currentlyActive = currentlyActive; // Boolean
    if(lastActive) {
      this.lastActive = lastActive; //Date
    } else {
      this.lastActive = new Date(); //Date
    }
    this.statusMsg = statusMsg; //String
  }

  getCurrentlyActive() {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;

    const now = new Date();
    const timeDifference = now - this.lastActive;

    if(timeDifference < MINUTE * 5) {
      //green
      return true;
    } else {
      //gray
      return false;
    }
  }

  getLastActiveString() {
    let str = '';
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    const MONTH = DAY * 30;
    const YEAR = DAY * 365;

    const now = new Date();
    if (this.currentlyActive) return '지금 활동 중';

    const timeDifference = now - this.lastActive;
    if (timeDifference < SECOND) {
      str = '지금 활동 중';
    } else if (SECOND <= timeDifference && timeDifference < MINUTE) {
      str = (Math.floor(timeDifference/SECOND).toString()) + '초 전';
    } else if (MINUTE <= timeDifference && timeDifference < HOUR) {
      str = (Math.floor(timeDifference/MINUTE).toString()) + '분 전';
    } else if (HOUR <= timeDifference && timeDifference < DAY) {
      str = (Math.floor(timeDifference/HOUR).toString()) + '시간 전';
    } else if (DAY <= timeDifference && timeDifference < WEEK) {
      str = (Math.floor(timeDifference/DAY).toString()) + '일 전';
    } else if (WEEK <= timeDifference && timeDifference < MONTH) {
      str = (Math.floor(timeDifference/WEEK).toString()) + '주 전';
    } else if (MONTH <= timeDifference && timeDifference < YEAR) {
      str = (Math.floor(timeDifference/MONTH).toString()) + '개월 전';
    } else if (YEAR < timeDifference) {
      str = (Math.floor(timeDifference/YEAR).toString()) + '년 전';
    } else {
      str = Math.floor(timeDifference.toString() / 1000) + '초 전';
    }
    return str;
  }

  getUser() {
    return {
      userId: this.userId,
      userName: this.userName,
      currentlyActive: this.currentlyActive,
      lastActive: this.lastActive.getTime(),
      statusMsg: this.statusMsg,
    }
  }

  getCopy() {
    return new User(this.userId, this.userName, this.statusMsg, this.currentlyActive, this.lastActive);
  }
}

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

// ContactsProvider must be children of ServerProvider
export default function ContactsProvider({ children }) {
  const [localUsers, setLocalUsers] = useLocalStorage('users', []);
  const loadLocalUsers = () => {
    return localUsers.map(user => ( 
      new User(user.userId, user.userName, user.statusMsg, user.currentlyActive, new Date(user.lastActive))
    ));
  }

  const [users, setUsers] = useState(() => { 
    const loadedLocalUsers = loadLocalUsers();
    if (loadedLocalUsers.length > 0) return loadedLocalUsers;
    const initialUsers = [];
    initialUsers.push(new User('sean', '김영우', '미션 수행 중'));
    initialUsers.push(new User('ceos.fe', '프론트', '밤 새는 중'));
    initialUsers.push(new User('ceos.sinchon', '세오스', '우리 동아리 안힘들어요^^'));
    initialUsers.push(new User('test', '테스트', '시험용'));
    return initialUsers;
  });

  useEffect(() => {
    setLocalUsers(users.map(user => user.getUser()));
  }, [users, setLocalUsers])

  const getUserById = useCallback((userId) => {
    const filteredUsers = users.filter(user => user.userId === userId);
    if(filteredUsers.length > 0) {
      return filteredUsers[0];
    } else {
      return false;
    }
  }, [users]);

  const [currentUser, setCurrentUser] = useState(() => getUserById('sean'));

  const userActivity = useCallback((userId) => {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        // console.log(`${user.userId} === ${userId} = ${user.userId === userId}`)
        if(user.userId === userId) {
          return new User(user.userId, user.userName, user.statusMsg, user.currentlyActive, new Date());
        } else {
          return user;
        }
      })
    })
  }, [])

  const selectUser = useCallback((userId) => {
    setCurrentUser(getUserById(userId))
    userActivity(userId)
  }, [getUserById, userActivity]);

  const deselectUser = useCallback(() => {
    setCurrentUser(null);
  }, [])

  const createAccount = useCallback((userId, userName, statusMsg) => {
    if(userId === '' || userName === '') return false;
    
    let userAlreadyExists = false;
    for(let i=0; i<users.length; i++) {
      if(users[i].userId === userId) {
        userAlreadyExists = true;
        break;
      }
    }
    if(userAlreadyExists) return false;
    const newUser = new User(userId, userName, statusMsg)
    setUsers(prevUsers => ([...prevUsers, newUser]))
    setCurrentUser(newUser);
    return true;
  }, [users])

  const changeUserId = (userId, newUserId) => {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.userId === userId) {
          // let newUser = user.getCopy();
          // newUser.userId = newUserId;
          // setCurrentUser(newUser);
          // return newUser;
          user.userId = newUserId;
          setCurrentUser(user);
          return user;
        } else {
          return user;
        }
      })
    })
  }
  
  const changeUserName = (userId, newUserName) => {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.userId === userId) {
          // let newUser = user.getCopy();
          // newUser.userName = newUserName;
          // setCurrentUser(newUser);
          // return newUser;
          user.userName = newUserName;
          setCurrentUser(user);
          return user;
        } else {
          return user;
        }
      })
    })
  }

  const changeStatusMsg = (userId, newStatusMsg) => {
    setUsers(prevUsers => (
      prevUsers.map(user => {
        if(user.userId === userId) {
          user.statusMsg = newStatusMsg;
          setCurrentUser(user);
          return user;
        } else {
          return user;
        }
      })
    ))
  }

  const initializeLocalUsers = () => {
    const initialUsers = [];
    initialUsers.push(new User('sean', '김영우', '미션 수행 중'));
    initialUsers.push(new User('ceos.fe', '프론트', '밤 새는 중'));
    initialUsers.push(new User('ceos.sinchon', '세오스', '우리 동아리 안힘들어요^^'));
    initialUsers.push(new User('test', '테스트', '시험용'));
    setUsers(initialUsers);
  }

  const value={
    getUserById, users, setUsers, createAccount, 
    currentUser, selectUser, deselectUser,
    userActivity, changeUserId, changeUserName, changeStatusMsg,
    initializeLocalUsers,
  }

  return (
    <ContactsContext.Provider value={value}>
      { children }
    </ContactsContext.Provider>
  )
}
