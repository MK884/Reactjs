import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext } from 'preact/hooks';


export const Profile = () => {
    const {user} = React.useContext(UserContext);
  return (
    <>
        {
            !user ? <p>Please Login</p> : <p>Welcome {user.UserName}</p> 
        }
    </>
  )
}
