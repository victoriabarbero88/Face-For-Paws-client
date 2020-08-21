import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    //traemos datos de props desde el "padre" para renderizar una vista o otra, si esta logeado muestra el email y boton de logout
    //si no esta logeado muestra botones de sign y login
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className='navbar'>
        <Link to={"/"} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedIn ? 
          (<>
            <p className='navbar-user'>Email: {user.email}</p>
            <button className='navbar-button' onClick={logout}>Logout</button>
            <Link to='/pet'>
              <button className='navbar-button'>pet</button>
            </Link>
          </>) 
          : 
          (<>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
