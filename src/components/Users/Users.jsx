import React, {useState, useEffect}from 'react';
import User from './User/User';

function Users() {
  let [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
        <h1>This is from users: {users.length}</h1>

        {
          users.map(user => <User
            key={user.id}
            allData={user}
            ></User>)
        }
    </div>
  )
}

export default Users