import React, { Component } from 'react';
import { Provider } from './components/Provider/Provider';

import MainPage from './components/MainPage/MainPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider>
                    <MainPage />
                </Provider>                
            </div>
        )
    }
}

export default App;