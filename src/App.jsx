import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NonUser from './NonUser'
import ValidUser from './ValidUser'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  /*useEffect(() =>{
    fetch('http://127.0.0.1:5000/time').then(res => res.json()).then(data => {
      setTime(data.time);
    });
  }, []);*/

  
  if(user ==null){
    return (
      <div>
        <NonUser setuser={(user) => setUser(user)} user={user}/>
      </div>
    )
  }
  else{
    return (
      <div>
        <ValidUser setuser={(user) => setUser(user)} user={user}/>
      </div>
  )}
  
}

export default App
