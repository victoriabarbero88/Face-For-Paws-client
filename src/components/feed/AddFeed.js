import React, { Component } from "react";
import axios from "axios";

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
      .post("http://localhost:4000/user-routes/feed/add-feed", {name, photo, title, description}, {withCredentials: true})
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

  render() {
    return (
      <div>
        <h1>Add a Feed</h1>
        <form onSubmit={this.handleFormSubmit}>
        <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            value={this.state.photo}
            onChange={e => this.handleChange(e)}
          />  
          <label>description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddFeed;