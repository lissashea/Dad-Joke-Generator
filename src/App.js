import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setJoke(data.joke);
        setError(null);
      } else {
        setError('Failed to fetch dad joke');
      }
    } catch (error) {
      setError('Failed to fetch dad joke');
    } finally {
      setLoading(false);
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    fetchJoke();
  }
  return (
    <div className="container">      <h1>Dad Joke Generator</h1>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke}</p>
          <button type="button" onClick={handleClick}>Get a new dad joke</button>
        </>
      )}
    </div>
  );
}

export default App;
