import React from 'react';
import { render } from 'react-testing-library';
import { Provider, Consumer } from '../Provider';

test('Provider can provide default values ', () => {
    const tree = (
        <Provider value={{name: 'Domitrius'}}>
            <Consumer>
                {(value) => <p>{value.state.name}</p>}
            </Consumer>
        </Provider>
    );  

    const { getByText } = render(tree);

    expect(getByText('Domitrius')).toBeDefined();

}) 


// TEST A MOCKED FETCH CALL 