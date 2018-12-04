import React, { Component } from 'react';

export const MyContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: null,
            loading: true,
            name: 'Domitrius',
            fetchCharacters: props.data
        }
    }


    showCharacters = async () => {
        const data = await this.state.fetchCharacters();
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