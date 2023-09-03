import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    let {details} = useParams();
  return (
    <div>UserDetails {details}</div>
  )
}

export default UserDetails;