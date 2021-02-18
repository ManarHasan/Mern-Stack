import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListPlayers = props => {
    

    return (
        <table>
            <thead>
                <tr>
                <th>Player Name:</th>
                <th>Preferred Position:</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {props.players.map((player, i) => {
                return (
                    <tr>
                    <td>{player.firstName} {player.lastName}</td>
                    <td>{player.position}</td>
                    <td>Delete</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default ListPlayers
