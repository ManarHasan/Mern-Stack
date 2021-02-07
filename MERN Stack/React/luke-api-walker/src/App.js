import Search from "./components/Search";
import {Router} from '@reach/router';
import Person from "./components/Person";
import Species from "./components/Species";
import Starship from "./components/Starship";
import Planet from "./components/Planet";


function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        <Person path="/people/:id"/>
        <Species path="/species/:id"/>
        <Starship path="/starships/:id"/>
        <Planet path="/planets/:id"/>
      </Router>

    </div>
  );
}

export default App;
