import Button from '@material-ui/core/Button';
import { keyframes } from "styled-components";
import React, {useState} from 'react'

const Tab = (props) => {
    const[open, setOpen] = useState(0);
    const onClickHandler = (e, i, str) => {
        setOpen(i);
        alert(str)
    }
 
    return (
        <div>
            {props.contents.map((content, i) =>
                <Button key = {i} variant="contained" color="primary" onClick={ (e) => onClickHandler(e, i, "this is an alert") }>Tab</Button>
            )}
            { open===1?
            <p >{props.contents[0]}</p>
            :open ===2?
            <p>{props.contents[1]}</p>
            :
            <p>{props.contents[2]}</p>
        }
        </div>
    )
}

export default Tab