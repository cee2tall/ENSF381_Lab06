import React from 'react'
import './App.css';
import Home from './Home' 
import About from './About'
import Contact from './Contact'

let currentYear = new Date().getFullYear()

let isLoggedIn = false;
let loginMessage = ""
if (isLoggedIn) {
  loginMessage = "Welcome Back!"
}
else {
  loginMessage = "Please log in."
}

function App() {
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>currentYear: {currentYear}</p>
      <p>{loginMessage}</p>
      <hr></hr>
      <Home message='Welcome to our website.'></Home>
      <hr></hr>
      <About message='We are passionate about delivering quality experiences.'></About>
      <hr></hr>
      <Contact message='Feel free to reach out to us via email or phone.'></Contact>
    </div>
  );
}

export default App;
