import React, { Component } from "react";

export default class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleDelete = (e) => {
        this.props.delete(e.target.dataset.id);
    }

    handleEdit = (e) => {
        this.props.edit(e.target.dataset.id)
    }

    getBody = () =>  {
        return this.props.dataUser.map((element) => {
            return(
                <tr key = {element.id}>
                    <td>{element.firstName}</td>
                    <td>{element.lastName}</td>
                    <td>{element.gender}</td>
                    <td>{element.birthday}</td>
                    <td><button data-id={ element.id } onClick={ this.handleEdit }>Edit</button></td>
                    <td><button data-id={ element.id } onClick = { this.handleDelete }>Delete</button></td>
                </tr>
            );
        })
    }

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getBody()}
                </tbody>
               
            </table>
        );
    }

} 