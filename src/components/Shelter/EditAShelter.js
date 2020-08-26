import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class EditAShelter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const shelterId = this.props.match.params.id;
    
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/shelter/${shelterId}`)
      .then(resonseFromApi => {
        const theShelter = resonseFromApi.data;
        //console.log(thePet)
        this.setState(theShelter);
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
    const phone = this.state.phone;
    const website = this.state.website;
    const description = this.state.description;
  
    
    const shelterId = this.props.match.params.id;

    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/shelter/edit-shelter/${shelterId}`, {
        name,
        photo,
        location,
        phone,
        website,
        description,
        
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
          <input type="file" name="photo" onChange={e => this.handleChange(e)}/> 
          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} onChange={e => this.handleChange(e)}/>
          <label>Phone:</label>
          <input type="text" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)}/>
          <label>Website:</label>
          <input type="text" name="website" value={this.state.website} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditAShelter;
