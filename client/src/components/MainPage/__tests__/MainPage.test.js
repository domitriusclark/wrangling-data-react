import React from 'react';
import { render } from 'react-testing-library';
import { MyContext } from '../../Provider/Provider';

import MainPage from '../MainPage';
import ShowCharactersButton from '../../ShowCharactersButton/ShowCharactersButton'
import CharacterPage from '../../CharacterPage/CharacterPage';

const MockedProvider = MyContext.Provider;

const mockedCharacter = [
    {id: 1, name: 'wow', stats: {hp: 1}}
];

const showCharacters = jest.fn();

test('MainPage renders ShowCharactersButton when state.characters is null', () => {
    const tree = (
        <MockedProvider value={{state: {characters: null}, actions: showCharacters }}>
            <MainPage WithoutCharacters={ShowCharactersButton} /> }    
        </MockedProvider>
    );
    
    render(tree)

    const charactersButton = document.getElementsByClassName('ShowCharactersButton')[0]

    expect(charactersButton).toBeDefined();
});

test('MainPage renders CharacterPage when supplied data', () => {
    const tree = (
        <MockedProvider value={{state: { characters: mockedCharacter }}}>
            <MainPage WithCharacters={CharacterPage} />
        </MockedProvider>
    );

    render(tree);

    const characterPage = document.getElementsByClassName('CharacterPage')[0];

    expect(characterPage).toBeDefined();
});


