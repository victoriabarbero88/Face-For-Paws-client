import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



class UserDetail extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  
  componentDidMount() {
    this.getSingleUser();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
 
  getSingleUser = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/user-routes/user/${params.id}`)
      .then(responseFromApi => {
        const theUser = responseFromApi.data;
        this.setState(theUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){
    return (
      <div>
    
        <div className="userStyle">
          <h1>{this.state.name}</h1>
          <img src={this.state.photo} alt="" />
          <p>{this.state.location}</p>
          <p>{this.state.status}</p>
          <p>{this.state.website}</p>
          <p>{this.state.description}</p>
          <p>{this.state.myPets}</p>
          <Link to={"/user"}>Back to Users</Link>
        </div>
      </div>
    )
  }
}

export default UserDetail;

