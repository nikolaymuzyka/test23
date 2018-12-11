import React, { Component } from 'react';
import './App.css';
import CreateForm from './CreateForm';
import UserRedactor from './UserRedactor'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           createUser: true,
           items: []
        }
    }
    handleCreate = (val, obj) => {
        this.setState({createUser:val})
        if (obj) {
            this.setState({
                items: [...this.state.items, obj]
            });
        }
        
    }

    render() {
        return (
            <div className="container">
               {this.state.createUser ? <CreateForm createUser= { this.handleCreate }/> : <UserRedactor  data = {this.state.items} createUser= { this.handleCreate } /> }
            </div>
        );
    }
}

export default App;
