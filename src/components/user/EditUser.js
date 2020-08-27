import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/user/${userId}`)
      .then(resonseFromApi => {
        const theUser = resonseFromApi.data;
        //console.log(thePet)
        this.setState(theUser);
        //console.log(this.state)
      })
      .catch(err => {
        console.log(err);
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const name = this.state.name;
    const photo = this.state.photo;
    const location = this.state.location;
    const description = this.state.description;
    const status = this.state.status;
    const myPets = this.state.myPets;

    const userId = this.props.match.params.id;

    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/user/edit-user/${userId}`, {
        name,
        photo,
        location,
        description,
        status,
        myPets
      }, {withCredentials: true})
      .then(() => {
        //this.props.getTheUser();
        this.props.history.push("/profile");
      })
      .catch(error => console.log(error));
  };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
  
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("photo", e.target.files[0]);
    
    service.handleUpload(uploadData)
    .then(response => {
        console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ photo: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }  

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <label>Photo:</label>
          <img src={this.state.photo} alt="actual"/>
          <input type="file" onChange={e => this.handleFileUpload(e)}/> 
          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          <label>Status:</label>
          <input type="text" name="status" value={this.state.status} onChange={e => this.handleChange(e)}/>
          <label>My Pets:</label>
          <input type="text" name="myPets" value={this.state.myPets} onChange={e => this.handleChange(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditUser;
