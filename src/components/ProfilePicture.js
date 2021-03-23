import React from 'react'
import styled from 'styled-components'

// const StyledProfilePicture = styled.img`
//   border-radius: 50%;
//   width: 200px;
// `;
const StyledProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 0;

  .right & {
    margin-right: 0px;
    margin-left: 15px;
  }
`;


export default function ProfilePicture({ userId }) {
  return (
    <StyledProfilePicture src={process.env.PUBLIC_URL + '/profile-pictures/' + userId.toString() + '.jpg'} alt="Profile Picture"/>
  )
}
