import React, { Component } from 'react';
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";

export default class UserRedactor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter:"",
            filterValue:"",
            delId:""
        }
    }

    handleFilters = (fil, filVal, id) => {
        this.setState({
            filter: fil,
            filterValue: filVal,
            delId: id
        });    
    }

    handleCreate = (val) => {
        this.props.createUser(val);
    }

    render() {
        console.log(this.state);
        let currentData = this.props.data;
        console.log(currentData);
        let filtratedData = [];
        // if (this.state.filter) {

        //     filtratedData = this.props.data.filter((element) => {
        //         for (let key in element) {
        //             if (key === this.state.filter && key === 'gender' && element[key] === this.state.filterValue ) {
        //                 return true;
        //             } else if (key === this.state.filter && element[key].indexOf(this.state.filterValue) !== -1 ) return true;
        //         }
        //     })            
        // } else {
            if (this.state.delId) {
                filtratedData = currentData.filter((element) => {
                    return element.id !== this.state.delId
                })   
            } else filtratedData = currentData;
        // }

        return(
            <div className="form-row">
                <div className="col-4">
                    <UserFilter filters = { this.handleFilters }  createNew = { this.handleCreate }/>
                </div>
                <div className="col-8">
                    <UserTable data = { filtratedData } delete = { this.handleFilters }/>
                </div>
            </div>
        );
    }




}