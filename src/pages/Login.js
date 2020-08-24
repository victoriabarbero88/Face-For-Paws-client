import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  //seteamos el state en 2 strings vacias
  state = { email: "", password: "", isShelter:"" };

  //metodo que actua en el momento de hacer el submit
  //coge email y password del state actual en el momento de hacer submit y las añade a las props
  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, isShelter } = this.state;
    console.log('Login -> form submit', { email, password, isShelter });
    this.props.login({ email, password, isShelter });
  };


  //??coge los datos mientras se van introduciendo
  handleChange = event => {
    let { name, value } = event.target;
    if (name === "isShelter"){
      value = event.target.checked
    }
    console.log(name, event.target.checked)
    this.setState({ [name]: value });
  };

  render() {
    //coge del state los datos de email y password
    const { email, password, isShelter } = this.state;

    return (
      <div className="loginContainer">


        <h1>Login</h1>
        <div className="loginStyle">
          <form onSubmit={this.handleFormSubmit}>

            <label>Are you a Shelter? </label>
            <input type="checkbox" name="isShelter" value={isShelter} onChange={this.handleChange}/>
            <br/>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={this.handleChange}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <br/>
            <input type="submit" value="Login" className="loginButton" />
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
