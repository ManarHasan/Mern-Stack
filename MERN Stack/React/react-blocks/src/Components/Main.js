import React, { Component } from 'react'

const mainStyle = {
    background: '#e06666',
    display: 'inline-block',
    width: '665px',
    height: '530px',
    margin: '0px'
}
export class Main extends Component {
    render() {
        return (
            <div style={mainStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main
