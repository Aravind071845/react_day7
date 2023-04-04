import React from 'react'
import Guest from './Guest';
import LoginUser from './LoginUser';

export default function Greetins(props) {
  const isLoggedIn=props.value;
  if(isLoggedIn)
  {
    return <LoginUser/>
  }
  else{
    return <Guest/>
  }
}
