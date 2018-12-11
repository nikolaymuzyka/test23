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

    handleDelete = (idDel) => {
        let currentItems = this.state.items.filter((element) => {
            console.log(element.id, idDel)
            return Math.round(element.id) !== Math.round(idDel)
        });
        console.log(currentItems);
    }
    

    render() {
        return (
            <div className="container">
               {this.state.createUser 
                ? <CreateForm createUser= { this.handleCreate }/> 
                : <UserRedactor  userData = {this.state.items} createUser= { this.handleCreate } delete={ this.handleDelete} /> }
            </div>
        );
    }
}

export default App;
