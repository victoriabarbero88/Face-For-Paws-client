import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListUsers extends Component {
  constructor() {
    super();
    this.state = { listOfUsers: [] };
  }

  getAllUsers = () => {
    axios.get(`http://localhost:4000/user-routes/user`).then(responseFromApi => {
      this.setState({
        listOfUsers: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="userContainer">
          <div className="userStyle">
            {this.state.listOfUsers.map(user=> {
              return (
                <div key={user._id}>
                  <Link to={`/user/${user._id}`}>
                    <img src={user.photo} alt="user" style={{width: '100px'}}/>
                    <p>{user.name}</p>
                  </Link>
                </div> 
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListUsers;