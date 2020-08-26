import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PetDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSinglePet();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSinglePet = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/pet/${params.id}`)
      .then(resonseFromApi => {
        const thePet = resonseFromApi.data;
        //console.log(thePet)
        this.setState(thePet);
        //console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    
    return (


      <div className="PetLGeneral">
      <h1>{this.state.name}</h1>
        <div className="petContainer">
          <div className="petLStyle">
            <div className="petLDiv">
            <h2>I'm {this.state.status}</h2>
              {this.state.photo ? (
                <img src={this.state.photo[0].medium} alt="pet" style={{width: '100%', maxWidth: 200}}/>
                ) : null}
              <p>Hi, my name is {this.state.name} and I'm a {this.state.age} {this.state.gender} {this.state.species} I'm from {this.state.location}</p>
              <p>Let me explain you a little bit about me, {this.state.description}</p>
            </div>
            <Link to={`/shelter/${this.state.shelter}`} className="petLink">
            I'm in this shelter
            </Link>
            <br/>
            <Link to={"/pet"} className="petLink">
            Back to pets
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PetDetail;