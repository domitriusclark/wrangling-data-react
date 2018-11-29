import React, { Fragment } from 'react';
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
                            characters && characters.map((character) => {
                                return (
                                    <Fragment>
                                        <CharacterCard name={character.name} characterClass={character.class} stats={character.stats}/>                                
                                    </Fragment>
                                )
                            })
                        }
                    </div>                    
                )
            }}
        </Consumer>
    )
};

export default CharacterPage;