import React, { Component } from "react";
import axios from "axios";


class EditPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.thePet.name,
      photo: this.props.thePet.photo,
      location: this.props.thePet.location,
      size: this.props.thePet.size,
      age: this.props.thePet.age,
      gender: this.props.thePet.gender,
      species: this.props.thePet.species,
      description: this.props.thePet.description,
      status: this.props.thePet.status
    };
  }

  handleFormSubmit = event => {
    const name = this.state.name;
    const photo = this.state.photo;
    const location = this.state.location;
    const size = this.state.size;
    const age = this.state.age;
    const gender = this.state.gender;
    const species = this.state.species;
    const description = this.state.description;
    const status = this.state.status;

    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URI}/user-routes/edit-pet/${this.props.thePet._id}`, {
        name,
        photo,
        location,
        size,
        age,
        gender,
        species,
        description,
        status
      }, {withCredentials: true})
      .then(() => {
        this.props.getThePet();
        this.props.history.push("/pet");
      })
      .catch(error => console.log(error));
  };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <input type="file" name="photo" value={this.state.photo} onChange={e => this.handleChange(e)}/>
          <input type="text" name="location" value={this.state.location} onChange={e => this.handleChange(e)}/>
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChange(e)}/>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)}/>
          <input type="text" name="gender" value={this.state.gender} onChange={e => this.handleChange(e)}/>
          <input type="text" name="species" value={this.state.species} onChange={e => this.handleChange(e)}/>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          <input type="text" name="status" value={this.state.status} onChange={e => this.handleChange(e)}/>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditPet;
