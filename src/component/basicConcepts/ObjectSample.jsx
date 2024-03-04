import { useState } from 'react'
/*
    Using object ad const state. and hot to change specific value of the object.
*/
export const ObjectSample = () => {

  const [user, setUser] = useState({name:'Ram', age: 21})

  function handleChange(e) {
    setUser({...user, [e.target.id]: e.target.value})
  }

  return (
    <div>
        <h3>{user.name}   {user.age}</h3>
        <input value={user.name} onChange={handleChange} placeholder='Enter the user name' id='name'/>
        <input value={user.age} onChange={handleChange} placeholder='Enter the user age' id='age'/>
    </div>
  )
}
