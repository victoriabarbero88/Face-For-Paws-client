import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



class UserDetail extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
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
      <div className="petLGeneral">
        <header className="UserHeader">
          <h1>{this.state.name}</h1>
        </header>
        <div className="userContainer">
          <div className="userStyle">
            <div className="userLDiv">
              {this.state.photo ? (
              <img src={this.state.photo} alt="user" style={{width: '100%', maxWidth: 200}}/>
              ) : null}
              <div className="userText">
                <p>Hi, I'm {this.state.name} and I'm from {this.state.location}.</p>
                <p>I'm available for {this.state.status}</p>
                <p>Something about me: {this.state.description}</p>
                <button className="button">
                  <Link to={"/add-message"} className="feedDLink">Contact</Link>
                </button>
              </div>
              <div className="userLinkContainer">
              <button className="button">
                <Link to={"/user"} className="feedDLink" >Back to Users</Link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;

