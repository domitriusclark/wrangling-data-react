import React, { Component } from 'react';
import { Provider } from './components/Provider/Provider';

import MainPage from './components/MainPage/MainPage';
import ShowCharactersButton from './components/ShowCharactersButton/ShowCharactersButton';
import CharacterPage from './components/CharacterPage/CharacterPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider>
                    <MainPage WithCharacters={CharacterPage} WithoutCharacters={ShowCharactersButton} />
                </Provider>                
            </div>
        )
    }
}

export default App;