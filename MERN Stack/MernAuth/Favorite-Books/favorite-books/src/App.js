import { Router } from '@reach/router';
import './App.css';
import Forms from './components/views/Forms';
import Home from './components/views/Home';
import LoginForm from './components/views/logic/LoginForm';
import RegisterForm from './components/views/logic/RegisterForm';
import {useState} from 'react'

function App() {
  const [token, setToken] = useState("");

  const getToken = token => {
    setToken(token)
    console.log(token)
  }

  return (
    <div className="App">
      <Router>
        <RegisterForm getToken={getToken} path="/register" />
        <LoginForm path="/login" />
        <Home token={token} path="/" />
      </Router>
    </div>
  );
}

export default App;
