import React, { Component, Fragment } from 'react';
import { Provider, Consumer } from './components/Provider/Provider';


import ShowCharactersButton from './components/ShowCharactersButton/ShowCharactersButton';
import CharacterPage from './components/CharacterPage/CharacterPage';

const ConditionalComponentRender = () => {
    return (
        <Consumer>
            {value => {
                const { characters } = value.state;                    
                return (
                    <Fragment>
                        {
                            characters === null ? (
                                <ShowCharactersButton />
                            ) : (
                                <CharacterPage></CharacterPage>
                            )
                        }                                    
                    </Fragment>                                
                )
            }}                        
        </Consumer> 
    )
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider>
                    <ConditionalComponentRender />
                </Provider>                
            </div>
        )
    }
}

export default App;