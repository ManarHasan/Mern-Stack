import React, { Component } from 'react'

const headerStyle = {
    background: '#6aa84f',
    height: '90px',
    width: '900px',
    margin: '10px'
}

export class Header extends Component {
    render() {
        return (
            <div style={headerStyle}></div>
        )
    }
}

export default Header
