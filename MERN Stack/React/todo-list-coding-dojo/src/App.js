import './App.css';
import {useState} from 'react';
import TaskForm from './components/TaskForm';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const newTasks = (newTasks) => {
    setTasks([...tasks, newTasks])
    
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  return (
    <div className="App">
      <TaskForm theTasks={tasks} makeNewTasks={newTasks}/>
      <DisplayTasks theTasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
