import React, { Fragment } from 'react';
import { Consumer } from '../Provider/Provider'; 

const ShowCharactersButton = () => {
    return (
        <Consumer>
            {({ actions }) => {
                const { showCharacters } = actions;
                return (
                    <Fragment>
                        <button className="ShowCharactersButton" onClick={showCharacters}>Show a list of characters!</button>
                    </Fragment>
                )
            }}
        </Consumer>
    )
};

export default ShowCharactersButton;