import React,{useState} from 'react'

const TaskForm = (props) => {
    const [task, setTask] = useState({
        id: 0,
        content: "",
        status: false
    });
    // var tasks = [];
    const taskHandler = (e) => {
        setTask({
            id: props.theTasks.length,
            content: e.target.value,
            status: false
        });
    }
    const taskSubmit = (e) => {
        e.preventDefault();

        props.makeNewTasks(task);
        setTask({
            content: "",
            status: false
        });
    }
    return (
        <form onSubmit={taskSubmit}>
            <label htmlFor="task">Task Name: </label>
            <input 
            type="text" 
            name="task"
            onChange={taskHandler}
            value={task.content}
            />
            <input type="submit" value="Add"/>
        </form>
    )
}

export default TaskForm
