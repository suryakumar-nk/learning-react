import React from 'react'
import { useState } from 'react'
import "./style.css"

export const UserDetail = () => {

  const [user, setUser] = useState({
    name: "RamKumar",
    age: 21,
    gender: "Male",
    isMarried: false,
    country: 'India'
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUser({...user, [name]: value})
  }

  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{ user.isMarried ? "Married" : "UnMarried" }</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{ user.country }</td>
                </tr>
            </tbody>
        </table>
        <form>
            <input type='text' placeholder='name' value={user.name} onChange={handleChange} name='name'/>
            <input type='number' placeholder='age' value={user.age} onChange={handleChange} name='age'/>
            <div>
                <label htmlFor='male'>
                    <input type='radio' checked={user.gender === 'Male'} name='gender' onChange={handleChange} value="Male"/> Male
                </label>
                <label htmlFor='female'>
                    <input type='radio' checked={user.gender === 'Female'} name='gender' onChange={handleChange} value="Female"/> Female
                </label>
            </div>
            <label htmlFor='isMarried'>
                <input type='checkbox' name='isMarried' checked={user.isMarried} onChange={handleChange}/>
                isMarried
            </label>
            <label for="cars">Choose a Country:</label>
            <select name="country" onClick={handleChange}>
                <option></option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
            </select>
        </form>
    </div>
  )
}
