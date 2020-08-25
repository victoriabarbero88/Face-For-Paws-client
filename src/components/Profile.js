import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

//import User from "./components/user/User";
//import Shelter from "./components/Shelter/Shelter";

class Profile extends Component {

state={user : this.props.user}

  render() {
    
    const { isShelter } = this.props.user;
    //console.log(this.props)
    //console.log(this.state)
    return (
      <div>
      { 
        isShelter ? 
        (<>
        <div className="shelterGeneral">
          <h1>{this.state.user.name}</h1>
          <div className="shelterContainer">
            <div className="shelterStyle">
              <div className="shelterDDiv">
                {this.state.user.photo ? (
                <img src={this.state.user.photo} alt="shelter" style={{width: '150%', maxWidth: 100}}/>
                ) : null}
                <div className="shelterPText">
                  <p>Location: {this.state.user.location}</p>
                  <p>Phone number: {this.state.user.phone}</p>
                  <p>Website: <Link to="{this.state.website}">{this.state.user.website}</Link></p>
                  <p>{this.state.user.description}</p>
                  <p>{this.state.user.pets}</p>
                </div>
              </div>
                <Link to={"/add-pet"} className="shelterDLink">
                Add a Pet
                </Link>
              
            </div>
          </div>
        </div>
        </>) 
        : 
        (<>
        <div className="userLGeneral">
          <h1>{this.state.name}</h1>
          <div className="userContainer">
            <div className="userStyle">
              <div className="userLDiv">
                {this.state.photo ? (
                <img src={this.state.photo} alt="user" style={{width: '100%', maxWidth: 100}}/>
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
        </>
        )}
      </div>
    )
  }  
}

export default withRouter(withAuth(Profile));

