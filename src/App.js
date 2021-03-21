import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots
        }
    }

    onNewSearch(event){
        console.log(event.target.value);
        
    }

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onNewSearch} />
                <CardList robots={this.state.robots} />
            </div>
        );
    }
    
}

export default App;