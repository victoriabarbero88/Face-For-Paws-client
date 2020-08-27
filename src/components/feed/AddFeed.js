import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';

class AddFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      title: "",
      description:"",
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const photo = this.state.photo;
    const title = this.state.title;
    const description = this.state.description;

    axios
      .post(`${process.env.REACT_APP_API_URI}/user-routes/feed/add-feed`, {name, photo, title, description}, {withCredentials: true})
      .then(() => {
        //this.props.getData();
        
        this.props.history.push("/feed") 

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
      <div className="addFeedGeneral">
        <header className="addFeedHeader">
          <h1>Add a Feed</h1>
        </header>
        <div className="">
          <form onSubmit={this.handleFormSubmit}>
          <div className="addFeedDiv">
            
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
              placeholder="Title"
            />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              placeholder="Written by"
            />
           
            <input
              type="file"
              onChange={e => this.handleFileUpload(e)}
              placeholder="Photo"
            />  
            <textarea
              name="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
              placeholder="Description"
            />
            <input type="submit" value="Submit" className="button"/>
            <img src="" alt=""/>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFeed;