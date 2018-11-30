import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import { Provider, Consumer } from '../../Provider/Provider';

import MainPage from '../../MainPage/MainPage';


test('CharacterPage renders with no error', async () => {
    const tree = (
        <Provider>
            <Consumer>
                {value => <MainPage /> }
            </Consumer>
        </Provider>
    );

    const { getByText } = render(tree);

    const characterButton = getByText('Show a list of characters!');

    fireEvent.click(characterButton);

    await waitForElement(() => document.getElementsByClassName('CharacterPage')[0]);

    expect(await waitForElement(() => document.getElementsByClassName('CharacterPage')[0])).toBeDefined();

});

// TEST THAT CHARACTERPAGE RENDERS 16 CHARACTER CARDS

