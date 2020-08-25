import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Shelter extends Component {
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
      .get(`${process.env.REACT_APP_API_URI}/user-routes/shelter/${params.id}`)
      .then(responseFromApi => {
        const theShelter = responseFromApi.data;
        console.log(theShelter)
        this.setState(theShelter);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return(
      <div>
        <div>
          <h1>{this.state.name}</h1>
           {this.state.photo ? (
            <img src={this.state.photo[0].small} alt="shelter"/>
            ) : null}
          <p>{this.state.location}</p>
          <p>{this.state.phone}</p>
          <p>{this.state.website}</p>
          <p>{this.state.description}</p>
          <p>{this.state.pets}</p>
          <Link to={"/add-pet"} className="plusimg">
            <img src="../../assets/plus.png" alt="" style={{width: '100%', maxWidth: 300}}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Shelter;