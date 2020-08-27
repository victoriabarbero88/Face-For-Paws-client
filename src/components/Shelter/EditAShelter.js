import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';


class EditAShelter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

          <input type="text" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)}/>
        
          <input type="text" name="website" value={this.state.website} onChange={e => this.handleChange(e)}/>
        
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} className="Divtext"/>
          
          <input type="submit" value="Submit" className="button" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditAShelter;
