import React,{useState} from 'react'

const DisplayTasks = (props) => {
    const[test, setTest] = useState(false);
    const[tasks, setTasks] = useState(props.theTasks);

    return (
        
        <ul>
            {props.theTasks.map((task, i) => {
            
            return <><li key={i}><input key={i+"a"} type="checkbox" checked={task.status} onChange={e =>{ setTest(!test); return task.status = !task.status}}/></li>
            <li key={i+"b"}><p key={i+"c"} className={task.status? "status" : ""}>{task.content}</p></li>
            <li><button onClick={(i) => { console.log(tasks); return props.theTasks.splice(task, i)}}>Delete</button></li></>
            })}
        </ul> 
        
    )
}

export default DisplayTasks
