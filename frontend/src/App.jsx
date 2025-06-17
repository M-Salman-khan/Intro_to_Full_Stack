import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/jokes")
    .then((response)=>setjokes(response.data))
    .catch((err)=>console.log(err))
  })
  
  return (
    <>
      <h1>Here is your jokes</h1>
      {jokes.map((joke,index)=>(
        <div key={index}>
          <h2>{joke.id} {joke.title}</h2>
          <p>{joke.description}</p>
        </div>
      ))}
    </>
  )
}

export default App
