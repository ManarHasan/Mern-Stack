import React from 'react'

const Box = (props) => {
    const boxStyle = {
        height: props.newHeight + 'px',
        width: props.newHeight + 'px',
        background: props.newColor,
        display: 'inline-block',
        margin: '10px'
    }
    return (
        <div style={boxStyle}></div>
    )
}

export default Box
