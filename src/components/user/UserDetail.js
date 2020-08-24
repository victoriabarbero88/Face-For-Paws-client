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
        <div className="userDContainer">
          <div className="userDStyle">
            <h1>Hi, I'm {this.state.name}</h1>
            {this.state.photo ? (
            <img src={this.state.photo} alt="user" style={{width: 100}}/>
            ) : null}
            <p>I'm from {this.state.location} and I'm available for {this.state.status}</p>
            <p>Something about me, {this.state.description}</p>
            <div className="userLinkContainer">
              <Link to={"/user"} className="userLink" >Back to Users</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;
