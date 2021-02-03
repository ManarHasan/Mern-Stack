import './App.css';
import {useState} from 'react';
import TaskForm from './components/TaskForm';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const newTasks = (newTasks) => {
    setTasks([...tasks, newTasks])
    
  }

  return (
    <div className="App">
      <TaskForm makeNewTasks={newTasks}/>
      <DisplayTasks theTasks={tasks}/>
    </div>
  );
}

export default App;
