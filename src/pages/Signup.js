import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  //setea el state con los datos igualados a strings vacios
  state = { name: "", password: "", email:"" };

  //metodo para la accion en el momento del submit
  handleFormSubmit = event => {
    event.preventDefault();
    const { name, password, email } = this.state;
    console.log('Signup -> form submit', { name, password, email });
    this.props.signup({ name, email, password });
  };

  //observa/recoge cada cambio que se va introduciendo
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    //recogemos en las variables los estado actuales del state
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />

          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />


          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
