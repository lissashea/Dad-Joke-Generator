import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  return (
    <div className="container">
      <h1>Dad Joke Generator</h1>
      <p>{joke}</p>
      <Button onClick={fetchJoke}>Get a new dad joke</Button>
    </div>
  );
}

export default App;
