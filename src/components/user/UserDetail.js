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
    console.log(params)
    axios
      .get(`http://localhost:4000/user-routes/user/${params.id}`)
      .then(responseFromApi => {
        const theUser = responseFromApi.data;
        //console.log(theUser)
        this.setState(theUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){
  //primero no llega nada, después llega objeto
    console.log(this.state)
    return (
      <div>
        <div className="userContainer">
          <div className="userStyle">
            <h1>{this.state.name}</h1>
            {this.state.photo ? (
            <img src={this.state.photo} alt="shelter"/>
            ) : null}
            <p>{this.state.location}</p>
            <p>{this.state.status}</p>
            <p>{this.state.website}</p>
            <p>{this.state.description}</p>
          
            <Link to={"/user"}>Back to Users</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;

