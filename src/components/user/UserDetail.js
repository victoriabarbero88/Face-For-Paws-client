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
      .get(`${process.env.REACT_APP_API_URI}/user-routes/user/${params.id}`)
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
      <div className="userLGeneral">
      <h1>{this.state.name}</h1>
        <div className="userContainer">
          <div className="userStyle">
            <div className="userLDiv">
              {this.state.photo ? (
              <img src={this.state.photo} alt="user" style={{width: '100%', maxWidth: 200}}/>
              ) : null}
              <div className="userText">
                <p>Hi, I'm {this.state.name} and I'm from {this.state.location}.</p>
                <p>I'm available for {this.state.status}</p>
                <p>If I could say omething about me, {this.state.description}</p>
              </div>
              <div className="userLinkContainer">
                <Link to={"/user"} className="userLink" >Back to Users</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;

