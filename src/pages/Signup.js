import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  //setea el state con los datos igualados a strings vacios
  state = { name: "", password: "", email:"" , isShelter:""};

  //metodo para la accion en el momento del submit
  handleFormSubmit = event => {
    event.preventDefault();
    const { name, password, email, isShelter } = this.state;
    console.log('Signup -> form submit', { name, password, email, isShelter });
    this.props.signup({ name, email, password, isShelter });
  };

  //observa/recoge cada cambio que se va introduciendo
  handleChange = event => {
    let { name, value } = event.target;
    if (name === "isShelter"){
      value = event.target.checked
    }
    //console.log(name, event.target.checked)
    this.setState({ [name]: value });
  };

  render() {
    //recogemos en las variables los estado actuales del state
    const { name, email, password, isShelter } = this.state;
    return (
      <div className="loginHeader">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="logDiv">
          <label>Are you a Shelter?</label>
          <input type="checkbox" name="isShelter" value={isShelter} onChange={this.handleChange}/>
          <br/>
       
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
          <br/>
   
          <input type="text" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
          <br/>
          
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/>
          <br/>
          <input type="submit" value="Signup" />
          </div>
        </form>
        <br/>
        <Link to={"/login"}>Already have account? Please, Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);


