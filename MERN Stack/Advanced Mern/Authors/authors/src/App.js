import './App.css';
import {Router} from '@reach/router'
import AuthorForm from './components/AuthorForm';
import DisplayAuthors from './views/DisplayAuthors';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <DisplayAuthors path="/" />
        <AuthorForm path="/new" />
        <Update path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
