import React from 'react'

const CardUsers = ({user}) => {
  return (
    <div className='card'>
        <img src={user.picture.large} alt="" />
        <h3 className='text'>{user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h3>
        <h3 className='text'>{user.email}</h3>
        <h3 className='text'>{user.gender}</h3>
        <h3 className='text'>{user.location.city}</h3>
    </div>
  )
}

export default CardUsers