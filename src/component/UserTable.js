import React, { Component } from "react";

export default class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // getBody = () => {
    //     let {data} = this.props.data;
    //     console.log(data);

    //     return(
    //         <tbody>
    //             {data.map((element) => {
    //                 return(
    //                     <tr key = {element.id}>
    //                         <td>{element.firstName}</td>
    //                         <td>{element.lastName}</td>
    //                         <td>{element.gender}</td>
    //                         <td>{element.birthday}</td>
    //                         <td><button>Edit</button></td>
    //                         <td><button onClick= {this.handleClick}>Delete</button></td>
    //                     </tr>
    //                 );
    //             })}
    //         </tbody>
    //     );
    // }

    handleClick = (e) => {
        this.props.delete("","", e.target.dataset.id);
        console.log(e.target.dataset.id);
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
                {this.props.data.map((element) => {
                    return(
                        <tr key = {element.id}>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.gender}</td>
                            <td>{element.birthday}</td>
                            <td><button >Edit</button></td>
                            <td><button data-id={ element.id } onClick = { this.handleClick }>Delete</button></td>
                        </tr>
                    );
                })}
                </tbody>
               
            </table>
        );
    }

} 