import React from 'react';
import { render } from 'react-testing-library';

import MainPage from '../MainPage';
import ShowCharactersButton from '../../ShowCharactersButton/ShowCharactersButton'
import CharacterPage from '../../CharacterPage/CharacterPage';
import { MockedProvider, contextValueSeed, defaultState } from '../../../utils/test-utils';


test('MainPage renders ShowCharactersButton when state.characters is null', () => {
    const tree = (
        <MockedProvider value={defaultState}>
            <MainPage WithoutCharacters={ShowCharactersButton} /> }    
        </MockedProvider>
    );
    
    render(tree)

    const charactersButton = document.getElementsByClassName('ShowCharactersButton')[0]

    expect(charactersButton).toBeDefined();
});

test('MainPage renders CharacterPage when supplied data', () => {
    const tree = (
        <MockedProvider value={contextValueSeed}>
            <MainPage WithCharacters={CharacterPage} />
        </MockedProvider>
    );

    render(tree);

    const characterPage = document.getElementsByClassName('CharacterPage')[0];

    expect(characterPage).toBeDefined();
});


