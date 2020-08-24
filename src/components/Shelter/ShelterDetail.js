import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



class SheleterDetail extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  
  componentDidMount() {
    this.getSingleShelter();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSingleShelter = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/user-routes/shelter/${params.id}`)
      .then(responseFromApi => {
        const theShelter = responseFromApi.data;
        console.log(theShelter)
        this.setState(theShelter);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){
    console.log(this.state)
    return (
      <div>
    
        <div>
          <h1>{this.state.name}</h1>
          <img src={this.state.photo} alt="" />
          <p>{this.state.location}</p>
          <p>{this.state.phone}</p>
          <p>{this.state.website}</p>
          <p>{this.state.description}</p>
          <p>{this.state.pets}</p>
          <Link to={"/shelter"}>Back to BeerList</Link>
        </div>
      </div>
    )
  }
}

export default SheleterDetail;

