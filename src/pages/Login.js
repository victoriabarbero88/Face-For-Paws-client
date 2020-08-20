import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  //seteamos el state en 2 strings vacias
  state = { email: "", password: "" };

  //metodo que actua en el momento de hacer el submit
  //coge email y password del state actual en el momento de hacer submit y las añade a las props
  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('Login -> form submit', { email, password });
    this.props.login({ email, password });
  };


  //??coge los datos mientras se van introduciendo
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    //coge del state los datos de email y password
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
