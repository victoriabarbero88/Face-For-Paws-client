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
      .post("http://localhost:4000/user-routes/pet/add-pet", {name, photo, location, size, age, gender, species, description, status})
      .then(() => {
        //this.props.getData();
        this.setState({
          name: "",
          photo: "",
          location: "",
          size: "",
          age: "",
          gender: "",
          species: "",
          description:"",
          status: ""
        })
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
          />
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
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={e => this.handleChange(e)}
          />
          <label>Species:</label>
          <input
            type="text"
            name="species"
            value={this.state.species}
            onChange={e => this.handleChange(e)}
          />
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}
          />
          <label>description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
        </form>
      </div>
    )
  }
}

export default AddPet;