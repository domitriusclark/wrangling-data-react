import React from 'react';
import { render } from 'react-testing-library';
import { Provider, Consumer } from '../../Provider/Provider';

import App from '../../..//App';
import CharacterPage from '../CharacterPage';
import ShowCharactersButton from '../../ShowCharactersButton/ShowCharactersButton';

test('CharacterPage renders 16 character cards', () => {
    const tree = (
        <Provider>
            <Consumer>
                <App />
            </Consumer>
        </Provider>
    );

    const { debug, getByText } = render(tree);

    const characterButton = getByText('Show a list of characters!');

    console.log(characterButton)

    debug();
})