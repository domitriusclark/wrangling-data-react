import React from 'react';

export const STYLE_BLOCK = "CharacterCard";

const CharacterCard = ({name, stats }) => {
    const statGrid = Object.keys(stats).map(((stat) => {
        return (
            <p key={stat}>{stat}: <span>{stats[stat]}</span></p>
        )
    }));
    return (
        <div className={STYLE_BLOCK}>
            <p>{name}</p>
            <div className={`${STYLE_BLOCK}__stats`}>
                {statGrid}
            </div>            
        </div>
    )
}

export default CharacterCard;
