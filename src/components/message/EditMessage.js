import React, { Component } from "react";
import axios from "axios";

class EditMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const messageId = this.props.match.params.id;
    
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/message/${messageId}`)
      .then(resonseFromApi => {
        const theMessage = resonseFromApi.data;
        //console.log(thePet)
        this.setState(theMessage);
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
    const title = this.state.title;
    const description = this.state.description;


    const messageId = this.props.match.params.id;
   

    axios
      .put(`${process.env.REACT_APP_API_URI}/user-routes/message/edit-message/${messageId}`, {
        name,
        photo,
        title,
        description
      })
      .then(() => {
        this.props.history.push("/message");
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
        <h3>Edit message</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <label>Photo:</label>
          <img src={this.state.photo} alt="actual"/>
          <input type="file" name="photo" onChange={e => this.handleChange(e)}/> 
          <label>File:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default EditMessage;
