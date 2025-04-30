import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const Selfintroduction = ({ name = "unknown", date0fbirth, hobbies }) => {
  return (
    <div>
      <h1>"My name is {name}!"</h1>
      {date0fbirth ? <h2>I was born in {date0fbirth}</h2> : null}
      {hobbies.join("")}
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Selfintroduction name="Kirito" date0fbirth="12 june 1970" hobbies={["Playgame", "Watching TV", "Eat"]} />
    </div>
  );
}
export default App