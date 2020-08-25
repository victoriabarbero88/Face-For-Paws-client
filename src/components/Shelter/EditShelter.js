import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditShelter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.theShelter.name,
      photo: this.props.theShelter.photo,
      location: this.props.theShelter.location,
      phone: this.props.theShelter.phone,
      website: this.props.theShelter.website,
      description: this.props.theUser.description,
      pets: this.props.theShelter.pets,
    };
  }

  handleFormSubmit = event => {
    const name = this.state.name;
    const photo = this.state.photo;
    const location = this.state.location;
    const phone = this.state.phone;
    const website = this.state.website;
    const description = this.state.description;
    const pets = this.state.pets;


    event.preventDefault();

    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/shelter/${this.props.theShelter._id}`, {
        name,
        photo,
        location,
        phone,
        website,
        description,
        pets
      })
      .then(() => {
        this.props.getTheShelter();
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
  handleChangePhone = event => {
    this.setState({
      phone: event.target.value
    });
  };  
  handleChangeWebsite = event => {
    this.setState({
      website: event.target.value
    });
  };
  handleChangeDescription = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangePets = event => {
    this.setState({
      pets: event.target.value
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
          <label>Phone:</label>
          <input type="text" name="phone" value={this.state.phone} onChange={e => this.handleChangePhone(e)}/>
          <label>Website:</label>
          <input type="text" name="website" value={this.state.website} onChange={e => this.handleChangeWebsite(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)}/>
          <label>Pets:</label>
          <input type="text" name="pets" value={this.state.pets} onChange={e => this.handleChangePets(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
        <div>
          <h3>Pets in the shelter:</h3>
          <Link to={"/add-pet"} className="plusimg">
            <img src="../../assets/plus.png" alt=""/>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditShelter;
