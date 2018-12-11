import React, { Component } from 'react';
import './App.css';
import CreateForm from './CreateForm';
import UserRedactor from './UserRedactor'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           createUser: true,
           items: [],
           editItem: {}
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
        this.setState({
            items: currentItems
        })
    }

    handleEdit = (idEdit) => {
        let currentItem = this.state.items.filter((element) => {
            console.log(element.id, idEdit)
            return Math.round(element.id) === Math.round(idEdit)
        });
        
        let cur = currentItem[0];
        this.setState({        
            editItem: cur
        });
        setTimeout(() => {console.log(this.state.editItem)}, 1000);
        

        
    }
    

    render() {
        return (
            <div className="container">
               {this.state.createUser 
                ? <CreateForm createUser= { this.handleCreate }/> 
                : <UserRedactor  
                    userData = {this.state.items} 
                    createUser= { this.handleCreate } 
                    delete={ this.handleDelete} 
                    edit= { this.handleEdit }/> }
            </div>
        );
    }
}

export default App;
