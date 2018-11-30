import React, { Component } from 'react';

const MyContext = React.createContext();

export class Provider extends Component {
    state = {
        characters: null,
        loading: true,
        name: 'Domitrius'
    };

    showCharacters = async () => {
        const response = await fetch("http://localhost:5000/test")
        const data = await response.json();
        const {characters} = data;
        const classObjectToArray = Object.keys(characters).map(character => characters[character]);
        this.setState({
            characters: classObjectToArray,
            loading: false,
        })
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    actions: {
                        showCharacters: this.showCharacters
                    }                    
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export const Consumer = MyContext.Consumer;