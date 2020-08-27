import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { isLoggedIn } = this.props;

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

            <div className="blockNavTabs">
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
                  <button className='usesr-button'>PawFriends</button>
                </Link>
                {/* <Link to='/message'>
                  <button className='message-button'>message</button>
                </Link> */}
              </div> 
            </div>
          </>) 
          : 
          (<>
          
            <nav className='navbar'>
              <Link to={"/"} className="logoimg">
                <img src="../../assets/Logo.png" alt=""/>
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
