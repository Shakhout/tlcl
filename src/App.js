import React, { Component } from 'react';
import './App.css';
import SearchBoxComponent from "./components/search-box/searchbox.component";
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            commands: [],
            searchKey: ''
        }
    }

    componentDidMount() {
        fetch('/tlcl/data/commands.json')
            .then(response => response.json())
            .then(commands => {
                this.setState({commands: commands})
            })
            .catch(error => console.log(error));

    }

    render() {
        const { commands, searchKey } = this.state;
        const filteredCommands = commands.filter(command =>
            command.name.toLowerCase().includes(searchKey.toLowerCase())
        );

        return (
            <div className="App">
                <h1>The Linux Command Line</h1>
                <div className="search-box">
                    <SearchBoxComponent onChange={searchKey => this.setState({searchKey: searchKey})} />
                </div>
                <div>
                    <CardList commands={filteredCommands}/>
                </div>
            </div>
        );
    }
}

export default App;
