import React, { Component } from "react";
import axios from "axios";

class EditFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.theFeed.name,
      photo: this.props.theFeed.photo,
      title: this.props.theFeed.title,
      description: this.props.theFeed.description,
    };
  }

  handleFormSubmit = event => {
    const name = this.state.name;
    const photo = this.state.photo;
    const title = this.state.title;
    const description = this.state.description;


    event.preventDefault();

    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/feed/${this.props.theFeed._id}`, {
        name,
        photo,
        title,
        description
      })
      .then(() => {
        this.props.getTheFeed();
        this.props.history.push("/feed");
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
      photo: event.target.value
    });
  };
  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleChangeDescription = event => {
    this.setState({
      description: event.target.value
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
          <label>Photo:</label>
          <input type="file" name="photo" value={this.state.photo} onChange={e => this.handleChangePhoto(e)}/>
          <label>File:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditFeed;
