import React,{useState} from 'react';
import { Button, Checkbox } from '@material-ui/core';

const DisplayTasks = ({theTasks, onDelete}) => {
    const[test, setTest] = useState(false);
    const[tasks, setTasks] = useState(theTasks)

    return (
        
        <ul style={{listStyle: 'none'}}>
            {theTasks.map((task, i) => {
            
            return <><li key={i}><Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} key={i+"a"} type="checkbox" checked={task.status} onChange={e =>{ setTest(!test); return task.status = !task.status}}/>
            <p style={{display: 'inline-block', margin: '5px'}} key={i+"c"} className={task.status? "status" : ""}>{task.content}</p>
            <Button variant="contained" color="primary" onClick={() => onDelete(task.id)}>Delete</Button></li></>
            })}
        </ul> 
        
    )
}

export default DisplayTasks
