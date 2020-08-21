import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import EditPet from './EditPet';

class PetDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSinglePet();
  }

  componentWillMount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSinglePet = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/user-routes/pet/${params.id}`)
      .then(resonseFromApi => {
        const thePet = resonseFromApi.data;
        this.setState(thePet);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if(!this.state.name){
      this.getSinglePet();
    } else {
      return <EditPet thePet={this.state} getThePet={this.getSinglePet} {...this.props} />
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()}</div>
        <Link to={"/pet"}>Back to pets</Link>
      </div>
    )
  }
}

export default PetDetail;