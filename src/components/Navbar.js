import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    //traemos datos de props desde el "padre" para renderizar una vista o otra, si esta logeado muestra el email y boton de logout
    //si no esta logeado muestra botones de sign y login
    const { logout, isLoggedIn } = this.props;

    return (
      <div>
        {
          isLoggedIn ? 
          (<>
              
            <nav className='navbar'>
              <div onClick={this.props.history.goBack} className="backimg">
                <img src="../../assets/back.png" alt=""/>
              </div>
              <Link to={"/feed"} className="logoimg">
                <img src="../../assets/Logo.png" alt=""/>
              </Link>
              <Link to={"/profile"} className="profileimg">
                <img src="../../assets/profile.png" alt=""/>
              </Link>
            </nav>

            <div className="tabs">
              <Link to='/feed'>
                <button className='feed-button actiive'>Feed</button>
              </Link>
              <Link to='/pet'>
                <button className='pet-button'>PawFamily</button>
              </Link>
              <Link to='/shelter'>
                <button className='shelter-button'>Shelters</button>
              </Link>
              <Link to='/user'>
                <button className='shelter-button'>PawFriends</button>
              </Link>
              <button className='logout-button' onClick={logout}>Logout</button>
            </div> 
          </>) 
          : 
          (<>
          
            <nav className='navbar'>
              <div onClick={this.props.history.goBack} className="backimg">
                <img src="../../assets/back.png" alt=""/>
              </div>
              <Link to={"/"} className="logoimg">
                <img src="../../assets/Logo.png" alt=""/>
              </Link>
              <Link to={"/login"} className="profileimg">
                <img src="../../assets/profile.png" alt=""/>
              </Link>
            </nav>

            <div className="tabs">
              <Link to='/login'>
                <button className='login-button'>Login</button>
              </Link>
              <Link to='/signup'>
                <button className='signup-button'>Sign Up</button>
              </Link>
            </div>

          </>
        )}
      </div>
    );
  }
}

export default withRouter(withAuth(Navbar));
