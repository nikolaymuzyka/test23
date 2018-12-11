import React, { Component } from "react";

export default class UserFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            filterValue: ""
        }
    }

    getFilter = () => {
        if (this.state.filter === 'firstName' || this.state.filter === 'lastName') {
            return (<input className="form-control" type="text" name="filterValue" value = {this.state.filterValue} onChange = { this.handleChange }  />);
        }
        if (this.state.filter === 'gender') {
            return ( <label>
                <select className="form-control" name="filterValue" value= { this.state.filterValue } onChange = { this.handleChange } >
                    <option value="" selected disabled hidden>Choose gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>);
        }
        if (this.state.filter === 'birthday') {
            return ( <input className="form-control" type="date" name="filterValue" value= {this.state.birthday} onChange = { this.handleChange } />);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.props.filters(this.state.filter, this.state.filterValue,"");
        e.preventDefault();
    }

    handleCreate = () => {
        this.props.createNew(true);
    }
   
    render() {
        return(
            <div className="container">
                <form onSubmit= { this.handleSubmit }>
                    <div className="form-group" >
                        <label>
                            Filter:
                            <select className="form-control" name="filter" value= { this.state.filter } onChange = { this.handleChange } >
                                <option value="" selected disabled hidden>Choose field</option>
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="gender">Gender</option>
                                <option value="birthday">Birthday</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Filter Value:
                            {this.getFilter()}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </label>
                    </div>
                </form>
                <button onClick = {this.handleCreate}>Create New</button>
            </div>
        );
    }
}