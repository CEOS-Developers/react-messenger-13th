import React from 'react'
import { Redirect } from 'react-router';
import { useContacts } from '../contexts/ContactsProvider'

export default function RequireLogin({children}) {
  const { currentUser } = useContacts();
  if(currentUser===null) {
    return (<Redirect to="/auth/login"/>)
  } else {
    return (<>{children}</>);
  }
}
