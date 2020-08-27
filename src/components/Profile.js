import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";


//import User from "./components/user/User";
//import Shelter from "./components/Shelter/Shelter";

class Profile extends Component {
 
  state = {}

  //getUser = () => {
  getProfile = () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user-routes/profile`, {withCredentials: true}).then(responseFromApi => {
      console.log(responseFromApi)
      this.setState(
        responseFromApi.data
      );
    });
  }
  componentDidMount() {
    this.getProfile()
  };

  deletePet = (petId) => {

    axios
      .delete(`${process.env.REACT_APP_API_URI}/user-routes/pet/delete/${petId}`)
      .then (() =>this.getProfile()) 
      .catch(err => {
        console.log(err);
    });
  }
  deleteFeed = (feedId) => {

    axios
      .delete(`${process.env.REACT_APP_API_URI}/user-routes/feed/delete/${feedId}`)
      .then (() =>this.getProfile()) 
      .catch(err => {
        console.log(err);
    });
  }
  
  render() {
    const { logout } = this.props;
    return (
    this.state ? (
  
        <div>
        { 
          this.state.isShelter
           ? 
          (<>
          <div className="shelterGeneral">
            <Link to={"/add-pet"} className="shelterDLink">Add a Pet</Link>
            <Link to={`/edit-shelter/${this.state._id}`} className="shelterDLink">Edit</Link>
            <button className='logout-button' onClick={logout}>Logout</button>
            <h1>{this.state.name}</h1>
            <div className="shelterContainer">
              <div className="shelterStyle">
                <div className="shelterDDiv">
                  {this.state.photo ? (
                  <img src={this.state.photo[0].medium} alt="shelter" style={{width: '150%', maxWidth: 100}}/>
                  ) : null}
                  <div className="shelterPText">
                    <p>Location: {this.state.location}</p>
                    <p>Phone number: {this.state.phone}</p>
                    <p>Website: <Link to="{this.state.website}">{this.state.website}</Link></p>
                    <p>{this.state.description}</p>
                    <section className="petList">
                        <h3>Pet list</h3>
                        <div className="petShelter">
                          {this.state.pets.map(pet => {
                            return (
                              <div key={pet._id} className="petLDiv" >
                                <Link to={`/edit-pet/${pet._id}`} className="petLink">
                                  <p>{pet.name}</p>
                                  {pet.photo[0] ? (
                                    <img src={pet.photo[0].full} alt="pet" style={{width: '100%', maxWidth: 200}}/>
                                  ) : null}
                                </Link>
                                <button onClick={() => this.deletePet(pet._id)} >Delete</button>
                              </div>
                            )
                          })}
                        </div>
                    </section>
                    <section className="FeedList">
                        <h3>Feed list</h3>
                        <div className="feedShelter">
                          {this.state.feed.map(feed => {
                            return (
                              <div key={feed._id} className="petLDiv" >
                                <Link to={`/edit-feed/${feed._id}`} className="feedLink">
                                  <p>{feed.name}</p>
                                  {feed.photo ? (
                                    <img src={feed.photo} alt="feed" style={{width: '100%', maxWidth: 200}}/>
                                  ) : null}
                                </Link>
                                <button onClick={() => this.deleteFeed(feed._id)} >Delete</button>
                              </div>
                            )
                          })}
                        </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>) 
          : 
          (<>
          <div className="userLGeneral">
            <h1>{this.state.name}</h1>
            <Link to={`/edit-user/${this.state._id}`} className="shelterDLink">Edit</Link>
            <button className='logout-button' onClick={logout}>Logout</button>
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

