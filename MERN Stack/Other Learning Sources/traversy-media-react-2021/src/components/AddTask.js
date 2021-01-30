import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd ({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="title">Task</label>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Task" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor="day">Day and Time</label>
                <input 
                type="text" 
                name="day" 
                placeholder="Add Day and Time" 
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="reminder">Set Reminder</label>
                <input
                type="checkbox"
                checked={reminder}
                name="reminder"
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"/>
        </form>
    )
}

export default AddTask