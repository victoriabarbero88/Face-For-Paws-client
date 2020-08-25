import React, { Component } from "react";
import axios from "axios";

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      location: "",
      size: "",
      age: "",
      gender: "",
      species: "",
      description:"",
      status: ""
    };
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const photo = this.state.photo;
    const location = this.state.location;
    const size = this.state.size;
    const age = this.state.age;
    const gender = this.state.gender;
    const species = this.state.species;
    const description = this.state.description;
    const status = this.state.status;
    axios
      .post(`${process.env.REACT_APP_API_URI}/user-routes/pet/add-pet`, {name, photo, location, size, age, gender, species, description, status}, {withCredentials: true})
      .then((pet) => {
        console.log(pet)
        //this.props.getData();
        this.props.history.push("/feed") 
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  render() {
    return (
      <div className="addPetGeneral">
        <h1>Add a PawFriend + </h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="addPetDiv">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Location:</label>
          <select
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}>
              <option value="Barcelona">Barcelona</option>
              <option value="Girona">Girona</option>
              <option value="Tarragona">Tarragona</option>
              <option value="Lleida">Barcelona</option>
          </select>
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            value={this.state.photo}
            onChange={e => this.handleChange(e)}
          />
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={this.state.size}
            onChange={e => this.handleChange(e)}
          />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={e => this.handleChange(e)}
          />
          <label>Gender:</label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={e => this.handleChange(e)}>

              <option value="Female">Female</option>
              <option value="Male">Male</option>

          </select>

          <label>Species:</label>
          <select
            name="species"
            value={this.state.species}
            onChange={e => this.handleChange(e)}>

              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Hamster">Hamster</option>
              <option value="Rabit">Rabit</option>
              <option value="Ferret">Ferret</option>
              <option value="Other">Other</option>

          </select>
          
          <label>Status:</label>
          <select
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}>
              <option value="Adopted">Adopted</option>
              <option value="Adoptable">Adoptable</option>
              <option value="Foster">Foster</option>
          </select>
          
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddPet;