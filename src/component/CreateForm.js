import React, { Component } from 'react';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            gender: '',
            birthday: ''
        }
    }


    handleChandge = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
      
        this.props.createUser(false, this.state);
        e.preventDefault();
    }

    componentDidMount = () => {
        let cur = new Date();
        this.setState({
            id: cur.getTime()
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label>
                            First Name: 
                            <input className="form-control" type="text" name="firstName" value= { this.state.firstName } onChange = { this.handleChandge } />    
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name:
                            <input className="form-control" type="text" name="lastName" value= { this.state.lastName } onChange = { this.handleChandge } />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Gender:
                            <select className="form-control" name="gender" value= { this.state.gender } onChange = { this.handleChandge } >
                                <option value="" selected disabled hidden>Choose gender</option>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Date of Birthday:
                            <input className="form-control" type="date" name="birthday" value= {this.state.birthday} onChange = { this.handleChandge } />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="submit" value="Save" className="btn btn-primary" />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateForm;
