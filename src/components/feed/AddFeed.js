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
              name="photo"
              value={this.state.photo}
              onChange={e => this.handleChange(e)}
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