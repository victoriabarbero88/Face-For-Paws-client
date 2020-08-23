import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class Profile extends Component {
  render() {
    return (
      <div> 
        <h1>Hello {this.props.user.name}</h1>
        <img src={this.props.user.photo} alt="user"/>
        <h2>I'm from {this.props.user.location}</h2>
        <p>About me: {this.props.user.description}</p>
        <p>My life companions: {this.props.user.myPets}</p>
        <p>I'm available for: {this.props.user.state}</p>
        <h3>My pets</h3>
      </div>
    )
  }  
}

export default withAuth(Profile);

