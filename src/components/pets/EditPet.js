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
      .put(`http://localhoste:4000/user-routes/pet/${this.props.thePet._id}`, {
        name,
        photo,
        location,
        size,
        age,
        gender,
        species,
        description,
        status
      })
      .then(() => {
        this.props.getThePet();
        this.props.history.push("/pet");
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
  handleChangelocation = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeSize = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeAge = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeGender = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeSpecies = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeDescription = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeStatus = event => {
    this.setState({
      name: event.target.value
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
          <input type="file" name="photo" value={this.state.photo} onChange={e => this.handleChangePhoto(e)}/>
          <input type="text" name="location" value={this.state.location} onChange={e => this.handleChangelocation(e)}/>
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChangeSize(e)}/>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChangeAge(e)}/>
          <input type="text" name="gender" value={this.state.gender} onChange={e => this.handleChangeGender(e)}/>
          <input type="text" name="species" value={this.state.species} onChange={e => this.handleChangeSpecies(e)}/>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)}/>
          <input type="text" name="status" value={this.state.status} onChange={e => this.handleChangeStatus(e)}/>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditPet;
