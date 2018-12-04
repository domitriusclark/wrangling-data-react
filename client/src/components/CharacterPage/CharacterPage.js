import React from 'react';
import { Consumer } from '../Provider/Provider';

import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterPage = () => {
    return (
        <Consumer>
            {value => {
                const { characters } = value.state;
                return (
                    <div className="CharacterPage">
                        {
                            characters.map((character) => <CharacterCard key={character.id} name={character.name} characterClass={character.class} stats={character.stats}/>)
                        }
                    </div>                    
                )
            }}
        </Consumer>
    )
};

export default CharacterPage;