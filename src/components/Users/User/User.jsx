import React from 'react';
import { useNavigate } from 'react-router-dom';

function User(props) {
    let {name, username, id} = props.allData;
    let navigate = useNavigate();
    let userDtails = () => {
        const path=`user/${id}`;
        navigate(path);
    }
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={userDtails}>{username} id: {id}</button>
    </div>
  )
}

export default User