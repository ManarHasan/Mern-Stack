import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Games from './components/views/Games';
import ListPlayers from './components/views/ListPlayers';
import { Router } from '@reach/router';

function App() {
    const[loaded, setLoaded] = useState(false);
    const[players, setPlayers] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/all-players")
            .then(res => {
                setPlayers(res.data);
                console.log(res)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

  return (
    <div className="App">
      {loaded ? <Router>
      <ListPlayers players={players} path="/" />
      <Games players={players} path="/games" />
      </Router> : ""}
      
    </div>
  );
}

export default App;
