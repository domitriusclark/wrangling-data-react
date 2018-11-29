import React from 'react';



const CharacterCard = ({name, stats }) => {
    const statGrid = Object.keys(stats).map(((stat) => {
        return (
            <p key={stat}>{stat}: <span>{stats[stat]}</span></p>
        )
    }));
    return (
        <div className="CharacterCard">
            {name}
            {statGrid}
        </div>
    )
}

export default CharacterCard;