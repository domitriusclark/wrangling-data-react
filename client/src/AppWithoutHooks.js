import React, { Component } from 'react';

class AppWithoutHooks extends Component {
    constructor(props) {
        super(props);


        this.state = {
        characters: null,
        loading: true
    }
    }
    

    async componentDidMount() {
        const response = await fetch("http://localhost:5000/test")
        const data = await response.json();
        const {characters} = data;
        const classObjectToArray = Object.keys(characters).map(character => characters[character]);
        this.setState({
            characters: classObjectToArray,
            loading: false
        })
    }
    
    render() {
        const { state } = this;
        const { characters, loading } = state
        return (
            <div>
                {
                    loading ? <p>Loading...</p> : characters.map((singleCharacter) => {
                        const { id, name: characterName } = singleCharacter;
                        return (
                            <p key={id}>{characterName}</p>
                        )}) 
                }
            </div>
        )
    }
}

export default AppWithoutHooks;