import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import React, { useState } from 'react';

function NumberGuessingGame() {
  // Generate a random number for the user to guess
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);

  // Keep track of the user's guess
  const [guess, setGuess] = useState('');

  // Keep track of the message to display to the user
  const [message, setMessage] = useState('');

  function handleGuess(e) {
    e.preventDefault();

    // Compare the user's guess to the secret number
    if (guess === secretNumber) {
      setMessage('Acierto! Has adivinado el número!');
    } else {
      setMessage('Error! Inténtalo de nuevo.');
    }
  }

  return (
    <div>
      <h1>Adivina el número</h1>
      <p>Introduce un número del 1 al 100 y pulsa Enviar para hacer tu adivinanza.</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          min="1"
          max="100"
          value={guess}
          onChange={e => setGuess(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{message}</p>
    </div>
  );
}



function App() {
  return (
   
      <ListItems/>

    

  );
}

export default App;


