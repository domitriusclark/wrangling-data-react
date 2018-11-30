import React from 'react';
import { render, fireEvent} from 'react-testing-library';

import { Provider, Consumer } from '../../Provider/Provider'
import ShowCharactersButton from '../ShowCharactersButton';

test('ShowCharactersButton renders to the DOM with no error', () => {
    const tree = (
        <Provider>
            <Consumer>
                {value => <ShowCharactersButton />}
            </Consumer>
        </Provider>
    )
    const { getByText } = render(tree);

    const characterButton = getByText('Show a list of characters!');

    fireEvent.click(characterButton)

    expect(characterButton).toBeDefined();
})