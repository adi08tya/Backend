import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
function App() {
const [jokes, setJokes] = useState([]);
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data);
  }).catch((err) => {
    console.log(err);
    
  });
},[])
  return (
    <>
      <h1>Hello world</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App
