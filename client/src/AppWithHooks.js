import React, { useEffect, useState,  } from 'react';
import './App.css';


/* 

Using the useEffect and useState hook to pull data into state

Think of the useEffect Hook as:
componentDidMount,
componentDidUpdate,
componentWillUnmount 
...all combined in one function since we're not using a class component.

The useState hook allows you declare state as you would in a class based component (this.state = {}) 
and your state manipulator (this.setState())

*/
const AppWithHooks = () => {
	const [fetchedCharacters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

	useEffect(async () => {
      const response = await fetch("http://localhost:5000/test")
      const data = await response.json();
      const {characters} = data;
      const classObjectToArray = Object.keys(characters).map(character => characters[character]);
      setTimeout(setCharacters(classObjectToArray), 3000);
      setLoading(false);
    }, []
  );

	return (
		<div className="App__container">
      {loading ? <p>Loading...</p> : fetchedCharacters.map((singleCharacter) => {
        return (
          <p key={singleCharacter.id}>{singleCharacter.name}</p>
        )
      })}
		</div>
	);
}

export default AppWithHooks;
