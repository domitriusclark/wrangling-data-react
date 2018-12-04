import React from 'react';
import { render } from 'react-testing-library';
import { MockedProvider, contextValueSeed } from '../../../utils/test-utils';

import CharacterPage from '../CharacterPage';

test('Character Page renders with no error', () => {
    const tree = (
        <MockedProvider value={contextValueSeed}>
            <CharacterPage />
        </MockedProvider>
    );
    render(tree);    

    const characterPage = document.getElementsByClassName('CharacterPage')[0]

    expect(characterPage).toBeDefined();

});

test('Character Page renders a CharacterCard for every character on state', () => {
    const tree = (
        <MockedProvider value={contextValueSeed}>
            <CharacterPage />
        </MockedProvider>
    );
    render(tree);  
    
    const characterPage = document.getElementsByClassName('CharacterPage')[0]
    
    expect(characterPage.children).toHaveLength(contextValueSeed.state.characters.length);

});



