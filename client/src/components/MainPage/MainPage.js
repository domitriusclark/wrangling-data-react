import React, { Fragment } from 'react';
import { Consumer } from '../Provider/Provider';

const MainPage = ({WithCharacters, WithoutCharacters}) => {
    return (
        <Consumer>
            {value => {
                const { characters } = value.state;                    
                return (
                    <Fragment>
                        {characters === null ? (<WithoutCharacters />) : (<WithCharacters />)}                                    
                    </Fragment>                                
                )
            }}                        
        </Consumer> 
    );
};


export default MainPage;