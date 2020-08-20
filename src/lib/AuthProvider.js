import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {

  return class extends Component {
    render() {

      return (
        <Consumer>
          {
            ({login, signup, user, logout, isLoggedIn}) => {
              return (
                <WrappedComponent
                  login={login}
                  signup={signup}
                  user={user}
                  logout={logout}
                  isLoggedIn={isLoggedIn}
                  {...this.props} />
              );
            }}
        </Consumer>
      );
    }
  };
};

//es le que mantiene el estado con la información proporcionada
class AuthProvider extends Component {
  state = { isLoggedIn: false, user: null, isLoading: true };

  componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedIn: true, user: user, isLoading: false}))
    .catch((err) => this.setState({ isLoggedIn: false, user: null, isLoading: false}));
  }

  signup = (user) => {
    const {email, name, password } = user;

    auth.signup({ email, name, password })
      .then((user) => this.setState({ isLoggedIn: true, user}))
      .catch(({response}) => this.setState({ message: response.data.statusMessage}));
  };

  login = (user) => {
    const { email, password } = user;

    auth.login({ email, password })
      .then((user) => this.setState({ isLoggedIn: true, user}))
      .catch((err) => this.setState(err));
  };

  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((err) => this.setState(err));
  };

  render() {
    const { isLoading, isLoggedIn, user } = this.state;
    const { login, logout, signup } = this;

    return (
      isLoading ?
      <div>Loading</div>
      :
      (<Provider value={{ isLoggedIn, user, login, logout, signup }} >
        {this.props.children}
      </Provider>)
    )
  }
}

export { Consumer, withAuth };

export default AuthProvider;