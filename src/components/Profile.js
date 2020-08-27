import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import service from './api/service';



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
    window.scrollTo(0, 0);
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
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
  
    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);
    
    service.handleUpload(uploadData)
    .then(response => {
        console.log('response is: ', response);
        this.setState({ photo: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
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
          <div className="PetGeneral">
            <header className="petDHeader">
              <h1>{this.state.name}'s Profile</h1>
              <div>
                <button className='Pbutton' >
                  <Link to={"/add-pet"} className="petDLink">
                    Add a Pet
                  </Link>
                </button>
                <button className='Pbutton'>
                  <Link to={`/edit-shelter/${this.state._id}`} className="petDLink">
                    Edit
                  </Link>
                </button>
                <button className='Pbutton' onClick={logout}>
                  Logout
                </button>
              </div>
              
              </header>
              <div className="PetContainer">
                <div>
                  <div className="petDDiv">
                    {this.state.photo[0].medium ? (
                          <img src={this.state.photo[0].medium} alt="pet" style={{width: '100%'}}/>
                        ) : 
                          <img src={this.state.photo} alt="pet" style={{width: '100%'}}/>
                          }
                    <div>
                      <p>Location: {this.state.location}</p>
                      <p>Phone number: {this.state.phone}</p>
                      <p>Website: <Link to="{this.state.website}">{this.state.website}</Link></p>
                      <p>{this.state.description}</p>
                      <section className="h3PetL">
                      <hr/>
                      <div className="petContainer">
                        <h3>Pet list</h3>
                        <div>
                          {this.state.pets ? this.state.pets.map(pet => {
                            return (
                              <div key={pet._id} className="petDDiv" >
                                <Link to={`/edit-pet/${pet._id}`} className="petLink">
                                  <p>{pet.name}</p>
                                  {pet.photo[0].medium ? (
                                      <img src={pet.photo[0].medium} alt="pet" style={{width: '100%'}}/>
                                    ) : 
                                      <img src={pet.photo} alt="pet" style={{width: '100%'}}/>
                                      }
                                </Link>
                                <button className='button' onClick={() => this.deletePet(pet._id)} >Delete</button>
                              </div>
                            )
                          }) : null }
                        </div>
                        </div>
                      </section>
                      <section className="h3PetL">
                        <div className="petDDiv">
                        <hr/>
                          <h3>Feed list</h3>
                          <div>
                            {this.state.feed ? this.state.feed.map(feed => {
                              return (
                                <div key={feed._id} className="petDDiv" >
                                  <Link to={`/edit-feed/${feed._id}`} className="PetDLink">
                                    {feed.photo ? (
                                      <img src={feed.photo} alt="feed" style={{width: '100%'}}/>
                                    ) : null}
                                  </Link>
                                  <button className='button' onClick={() => this.deleteFeed(feed._id)} >Delete</button>
                                </div>
                              )
                            }) : null }
                        </div>
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
          <div className="PetLGeneral">
            <header className="petDHeader">
            <h1>{this.state.name}'s Profile</h1>
              <div>
                <button className='Pbutton'>
                  <Link to={`/edit-user/${this.state._id}`} className="petDLink">
                    Edit Profile
                  </Link>
                </button>
                <button className='Pbutton' onClick={logout}>
                  Logout
                </button>
              </div>
            </header>
            <div className="petContainer">
              <div>
                <div className="petDDiv">
                  {this.state.photo ? (
                  <img src={this.state.photo} alt="user" style={{width: '100%'}}/>
                  ) : null}
                  <div>
                    <p>Hi, I'm {this.state.name} and I'm from {this.state.location}.</p>
                    <p>I'm available for {this.state.status}</p>
                    <p>If I could say omething about me, {this.state.description}</p>
                  </div>
                  <div>
                    <button className="button">
                      <Link to={"/user"} className="petDLink" >Back to Users</Link>
                    </button>
                  </div>
                </div>
                <section className="h3PetL">
                <hr/>
                  <div className="petContainer">
                    <h3>Feed list</h3>
                    <div>
                      {this.state.feed ? this.state.feed.map(feed => {
                        return (
                        <div key={feed._id} className="petDDiv" >
                          <Link to={`/edit-feed/${feed._id}`} className="petDLink">
                              {feed.photo ? (
                            <img src={feed.photo} alt="feed" style={{width: '100%'}}/>
                              ) : null}
                          </Link>
                          <button className='button' onClick={() => this.deleteFeed(feed._id)} >Delete</button>
                        </div>
                           )
                        }) : null }
                    </div>
                  </div>
                </section>
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

