import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'


function App() {

  const [users, setUsers] = useState()

  useEffect(() => {
    const URL = 'https://randomuser.me/api/?results=20'
    axios.get(URL)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(users)
  
  

  return (
    <div className="App">
      <h1 className='title'>Users API Consume</h1>
      <div className='divContainer'>
        {
          users?.map(user => (
            <CardUsers user={user} key={user.login.uuid}  />
          ))
        }
      </div>
    </div>
  )
}

export default App
