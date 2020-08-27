import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';


class EditPet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const petId = this.props.match.params.id;
    
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/pet/${petId}`)
      .then(resonseFromApi => {
        const thePet = resonseFromApi.data;
        //console.log(thePet)
        this.setState(thePet);
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
    const size = this.state.size;
    const age = this.state.age;
    const gender = this.state.gender;
    const species = this.state.species;
    const description = this.state.description;
    const status = this.state.status;

    const petId = this.props.match.params.id;
    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/pet/edit-pet/${petId}`, {
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
      .then((response) => {
        console.log(response)
        //this.props.getThePet();
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
    console.log(this.state)
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <img src={this.state.photo} alt="actual"/>
          <input type="file" onChange={e => this.handleFileUpload(e)}/>
          <select
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}>
              <option value="Barcelona">Barcelona</option>
              <option value="Girona">Girona</option>
              <option value="Tarragona">Tarragona</option>
              <option value="Lleida">Barcelona</option>
          </select> 
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChange(e)}/>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)}/>
          <select
            name="gender"
            value={this.state.gender}
            onChange={e => this.handleChange(e)}>

              <option value="Female">Female</option>
              <option value="Male">Male</option>

          </select>

          <select
            name="species"
            value={this.state.species}
            onChange={e => this.handleChange(e)}>

              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Hamster">Hamster</option>
              <option value="Rabit">Rabbit</option>
              <option value="Ferret">Ferret</option>
              <option value="Other">Other</option>

          </select>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          <select
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}>
              <option value="Adopted">Adopted</option>
              <option value="Adoptable">Adoptable</option>
              <option value="Foster">Foster</option>
          </select>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditPet;
