import React, { Component } from 'react';
import { Provider } from './components/Provider/Provider';

import MainPage from './components/MainPage/MainPage';
import ShowCharactersButton from './components/ShowCharactersButton/ShowCharactersButton';
import CharacterPage from './components/CharacterPage/CharacterPage';


class App extends Component {
    async fetchData() {
        const response = await fetch("http://localhost:5000/test");
        return await response.json();
    }

    render() {
        
        return (
            <div className="App">
                <Provider data={this.fetchData.bind(this)}>
                    <MainPage fetchData={this.fetchData.bind(this)} WithCharacters={CharacterPage} WithoutCharacters={ShowCharactersButton} />
                </Provider>                
            </div>
        )
    }
}

export default App;