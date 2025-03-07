// import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
