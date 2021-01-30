import React, { Component } from 'react'

const subStyle = {
    background: '#ffd966',
    display: 'inline-block',
    width: '200px',
    height: '380px',
    margin: '10px'
}
export class SubContents extends Component {
    render() {
        return (
            <div style={subStyle}></div>
        )
    }
}

export default SubContents
