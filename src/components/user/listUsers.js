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
    window.scrollTo(0, 0);
    this.getAllUsers();
  }

  render() {
    return (
      <div className="userLGeneral">
        <header className="PetHeader">
          <h1>PawFriends <span role="img" aria-label="paws"> 🐾</span></h1>
        </header>
        <div className="userContainer">
          <div className="userStyle">
            {this.state.listOfUsers.map(user=> {
              return (
                <div key={user._id} className="userLDiv">
                  <Link to={`/user/${user._id}`} className="userLink">
                  <div className="userLimg">
                    <img src={user.photo} alt="user" style={{width: '100%', maxWidth: 200}}/>
                  </div> 
                    <p>Hi! I'm {user.name}.</p>
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