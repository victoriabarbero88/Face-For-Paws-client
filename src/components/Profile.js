import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

//import User from "./components/user/User";
//import Shelter from "./components/Shelter/Shelter";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isShelter } = this.props;
    console.log(this.state)
    return (
      <div>
      { 
        isShelter ? 
        (<>
          <div>
            <div>
              <h1>{this.state.name}</h1>
              {this.state.photo ? (
                <img src={this.state.photo[0].small} alt="shelter"/>
                ) : null}
              <p>{this.state.location}</p>
              <p>{this.state.phone}</p>
              <p>{this.state.website}</p>
              <p>{this.state.description}</p>
              <p>{this.state.pets}</p>
              <Link to={"/add-pet"} className="plusimg">
                <img src="../../assets/plus.png" alt=""/>
              </Link>
            </div>
          </div>
        </>) 
        : 
        (<>
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

