import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//rutas de componentes
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import AddPet from "./components/pets/AddPet";
import ListsPets from "./components/pets/ListsPets";
import PetDetail from "./components/pets/PetDetail";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />
          <h1>Face for Paws</h1>

          <Switch>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path='/add-pet' component={AddPet}/>
            <Route exact path='/pet' component={ListsPets}/>
            <Route exact path='/pet/:id' component={PetDetail}/>


          </Switch>
        </div>

      </AuthProvider>
    );
  }
}

export default App;
