import React from 'react'
import './design.css'

export const UserCard = (props) => {
  return (
    <div className='container'>
        <img className='image' src={props.imageurl} alt='logo192' />
        <h3 className=''>EMP ID: {props.id}</h3>
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <div className='button'>
          <button className='primary'>Message</button>
          <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
          <p>skills</p>
          <ul>{props.skills.map((key, index) => (
            <li key={index}>{key}</li>
          ))}</ul>
        </div>
    </div>
  )
}
