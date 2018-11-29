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
                    <Fragment className="">
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


class AppWithoutHooks extends Component {
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

export default AppWithoutHooks;