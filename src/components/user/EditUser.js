import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    let { name, value, type } = event.target;
    if (type ==="checkbox") {
      value = value.checked
    }
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
      <div className="editComponent">
        <hr />
        <header className="UserHeader">
        <h1>Edit form</h1>
        </header>
        <form onSubmit={this.handleFormSubmit}>
        <div className="Div">
        
          <img src={this.state.photo} alt="actual" style={{width:'100%', borderRadius: '5%'}}/>
          <input type="file" onChange={e => this.handleFileUpload(e)}/> 
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <select
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}>
              <option value="Barcelona">Barcelona</option>
              <option value="Girona">Girona</option>
              <option value="Tarragona">Tarragona</option>
              <option value="Lleida">Barcelona</option>
          </select> 
          
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} className="Divtext"/>
          
          <select
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)} >
              <option value="Foster Home">Foster Home</option>
              <option value="Sponsor">Sponsor</option>
              <option value="Dog Walker">Dog Walker</option>
              <option value="Animal Watcher">Animal Watcher</option>
          </select> 
          
          <input type="text" name="status" value={this.state.status} onChange={e => this.handleChange(e)}/>
        
          <input type="text" name="myPets" value={this.state.myPets} onChange={e => this.handleChange(e)}/>
          
          <input type="submit" value="Submit" className="button" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;

{/* <label>Status:</label>
          <label>Sponsor</label>
          <input
            type="checkbox"
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}/ >
            <label>Foster Home</label>
            <input
            type="checkbox"
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}/ >
            <label>Dog Walker</label>
            <input
            type="checkbox"
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}/ >
            <label>Animal Watcher</label>
            <input
            type="checkbox"
            name="status"
            value={this.state.status}
            onChange={e => this.handleChange(e)}/ > */}
