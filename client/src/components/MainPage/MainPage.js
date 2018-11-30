import React, { Fragment } from 'react';
import { Consumer } from '../Provider/Provider';

import ShowCharactersButton from '../ShowCharactersButton/ShowCharactersButton';
import CharacterPage from '../CharacterPage/CharacterPage';

const MainPage = () => {
    return (
        <Consumer>
            {value => {
                const { characters } = value.state;                    
                return (
                    <Fragment>
                        {
                            characters === null ? (
                                <ShowCharactersButton />
                            ) : (
                                <CharacterPage></CharacterPage>
                            )
                        }                                    
                    </Fragment>                                
                )
            }}                        
        </Consumer> 
    )
}

export default MainPage;