import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

//import User from "./components/user/User";
//import Shelter from "./components/Shelter/Shelter";

class Profile extends Component {
  render() {
    this.state = this.props.user;
    const { isShelter } = this.props;
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
      { 
        isShelter ? 
        (<>
        <div className="shelterGeneral">
          <h1>{this.state.name}</h1>
          <div className="shelterContainer">
            <div className="shelterStyle">
              <div className="shelterDDiv">
                {this.state.photo ? (
                <img src={this.state.photo[0].small} alt="shelter" style={{width: '150%', maxWidth: 200}}/>
                ) : null}
                <div className="shelterDText">
                  <p>Location: {this.state.location}</p>
                  <p>Phone number: {this.state.phone}</p>
                  <p>Website: <Link src="{this.state.website}">{this.state.website}</Link></p>
                  <p>{this.state.description}</p>
                  <p>{this.state.pets}</p>
                </div>
                <Link to={"/add-pet"} className="shelterDLink">
                Add a Pet
                </Link>
              </div>
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
        </>
        )}
      </div>
    )
  }  
}

export default withRouter(withAuth(Profile));

