import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";

//rutas de componentes
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import AddPet from "./components/pets/AddPet";
import AddFeed from "./components/feed/AddFeed";
import ListsPets from "./components/pets/ListsPets";
import PetDetail from "./components/pets/PetDetail";
import ShelterDetail from "./components/Shelter/ShelterDetail";
import UserDetail from "./components/user/UserDetail";
import FeedDetail from "./components/feed/FeedDetail"
import ListFeed from "./components/feed/ListFeed";
import ListShelters from "./components/Shelter/listShelters";
import ListUsers from "./components/user/listUsers";
import EditPet from "./components/pets/EditPet"
import EditFeed from "./components/feed/EditFeed"
import EditUser from "./components/user/EditUser"
import EditAShelter from "./components/Shelter/EditAShelter"
import EditMessage from "./components/message/EditMessage"
import AddMessage from "./components/message/AddMessage"
import ListMessage from "./components/message/ListMessage"
import MessageDetail from "./components/message/EditMessage"



class App extends Component {
  render() {
    return (
      <AuthProvider className='container'>
        <Navbar />
        <div className='container'>  
          <Switch>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/add-pet' component={AddPet}/>
            <PrivateRoute exact path='/pet' component={ListsPets}/>
            <PrivateRoute exact path='/feed' component={ListFeed}/>
            <PrivateRoute exact path='/shelter' component={ListShelters}/>
            <PrivateRoute exact path='/user' component={ListUsers}/>
            <PrivateRoute exact path='/pet/:id' component={PetDetail}/>
            <PrivateRoute exact path='/shelter/:id' component={ShelterDetail}/>
            <PrivateRoute exact path='/feed/:id' component={FeedDetail}/>
            <PrivateRoute exact path='/user/:id' component={UserDetail}/>
            <PrivateRoute exact path='/add-feed' component={AddFeed}/>
            <PrivateRoute exact path='/edit-feed/:id' component={EditFeed}/>
            <PrivateRoute exact path='/edit-pet/:id' component={EditPet}/>
            <PrivateRoute exact path='/edit-user/:id' component={EditUser}/>
            <PrivateRoute exact path='/edit-shelter/:id' component={EditAShelter}/>
            <PrivateRoute exact path='/edit-message/:id' component={EditMessage}/>
            <PrivateRoute exact path='/add-message' component={AddMessage}/>
            <PrivateRoute exact path='/message/:id' component={MessageDetail}/>
            <PrivateRoute exact path='/message' component={ListMessage}/>
          </Switch>
        </div>

      </AuthProvider>
    );
  }
}

export default App;
