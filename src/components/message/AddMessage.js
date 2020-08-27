import React, { Component } from "react";
import axios from "axios";

class AddMessage extends Component {
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
      .post(`${process.env.REACT_APP_API_URI}/user-routes/message/add-message`, {name, photo, title, description}, {withCredentials: true})
      .then(() => {
        //this.props.getData();
        
        this.props.history.push("/message") 

      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  render() {
    return (
      <div className="addMessageGeneral">
        <header className="addMessageHeader">
          <h1>Send a Message</h1>
        </header>
        <div className="">
          <form onSubmit={this.handleFormSubmit}>
          <div className="addMessageDiv">
            
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
              placeholder="About"
            />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              placeholder="From"
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
              placeholder="Message"
            />
            <input type="submit" value="Submit" className="button" />
            <img src="" alt=""/>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddMessage;