import React, { Component } from "react";
import axios from "axios";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.theUser.name,
      photo: this.props.theUser.photo,
      location: this.props.theUser.location,
      description: this.props.theUser.description,
      status: this.props.theUser.status,
      myPets: this.props.theUser.myPets,
    };
  }

  handleFormSubmit = event => {
    const name = this.state.name;
    const photo = this.state.photo;
    const location = this.state.location;
    const description = this.state.description;
    const status = this.state.status;
    const myPets = this.state.myPets;


    event.preventDefault();

    axios
      .put(`http://localhoste:4000/user-routes/user/${this.props.theUser._id}`, {
        name,
        photo,
        location,
        description,
        status,
        myPets
      })
      .then(() => {
        this.props.getTheUser();
        this.props.history.push("/user");
      })
      .catch(error => console.log(error));
  };
  
  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangePhoto = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeTLocation = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleChangeDescription = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeStatus = event => {
    this.setState({
      status: event.target.value
    });
  };handleChangeMyPets = event => {
    this.setState({
      myPets: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChangeName(e)}/>
          <label>Photo:</label>
          <input type="file" name="photo" value={this.state.photo} onChange={e => this.handleChangePhoto(e)}/>
          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} onChange={e => this.handleChangeTLocation(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)}/>
          <label>Status:</label>
          <input type="text" name="status" value={this.state.status} onChange={e => this.handleChangeStatus(e)}/>
          <label>My Pets:</label>
          <input type="text" name="myPets" value={this.state.myPets} onChange={e => this.handleChangeMyPets(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditUser;
