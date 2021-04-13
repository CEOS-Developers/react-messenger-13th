import React from 'react'
import { useParams } from 'react-router'
import { useContacts } from '../contexts/ContactsProvider';

export default function FriendProfile() {
  const { id } = useParams();
  const { getUserById } = useContacts();

  return (
    <div>
      FriendProfile - profileId: { JSON.stringify(getUserById(id).getUser()) }
    </div>
  )
}
