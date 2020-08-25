import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";


//import User from "./components/user/User";
//import Shelter from "./components/Shelter/Shelter";

class Profile extends Component {
 
  state = {}

  //getUser = () => {
    
  componentDidMount() {
    axios.get(`http://localhost:4000/user-routes/profile`, {withCredentials: true}).then(responseFromApi => {
      console.log(responseFromApi)
      this.setState(
        responseFromApi.data
      );
    });
  };

  
  render() {
    return (
    this.state ? (
  
        <div>
        { 
          this.state.isShelter
           ? 
          (<>
          <div className="shelterGeneral">
            <h1>{this.state.name}</h1>
            <div className="shelterContainer">
              <div className="shelterStyle">
                <div className="shelterDDiv">
                  {this.state.photo ? (
                  <img src={this.state.photo} alt="shelter" style={{width: '150%', maxWidth: 100}}/>
                  ) : null}
                  <div className="shelterPText">
                    <p>Location: {this.state.location}</p>
                    <p>Phone number: {this.state.phone}</p>
                    <p>Website: <Link to="{this.state.website}">{this.state.website}</Link></p>
                    <p>{this.state.description}</p>
                    {this.state.pets.map(pet => {
                      return (
                        <div>
                          <p>{pet.name}</p>
                        </div>
                      )
                    })}
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
    
    
    : 
    
    (<p>"loading"</p>)
  )
 } 
}

export default withRouter(withAuth(Profile));

