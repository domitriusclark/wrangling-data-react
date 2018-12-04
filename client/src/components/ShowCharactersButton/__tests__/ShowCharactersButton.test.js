import React from 'react';
import { render, fireEvent} from 'react-testing-library';

import ShowCharactersButton from '../ShowCharactersButton';
import { MockedProvider, contextValueSeed } from '../../../utils/test-utils';

test('ShowCharactersButton renders to the DOM with no error', () => {
    const tree = (
        <MockedProvider value={contextValueSeed}>
            <ShowCharactersButton />
        </MockedProvider>
    );
    const { getByText } = render(tree);

    const characterButton = getByText('Show a list of characters!');

    fireEvent.click(characterButton);

    expect(characterButton).toBeDefined();

});

