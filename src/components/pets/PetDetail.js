import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PetDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    window.scrollTo(0, 0);
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
        <header className="petDHeader">
          <h1>Hi! I'm {this.state.name}</h1>
        </header>
        <div className="petContainer">
          <div className="">
            <div className="petDDiv">
            <h2>I'm {this.state.status}</h2>
            {this.state.photo ? 
              (
                this.state.photo[0].medium ? 
                  (<img src={this.state.photo[0].medium} alt="pet" style={{width: '100%'}}/>)
                  : 
                  (<img src={this.state.photo[0]} alt="pet" style={{width: '100%'}}/>)
                
              )
              : null
                }

              <p>Hi, my name is {this.state.name} and I'm a {this.state.age} {this.state.gender} {this.state.species} I'm from {this.state.location}</p>
              <p>Let me explain you a little bit about me, {this.state.description}</p>
            </div>
              <div className="petDButtons">
                <button className="button">
                  <Link to={`/shelter/${this.state.shelter}`} className="petDLink">
                  My Shelter
                  </Link>
                </button>
                <br/>
                <button className="button">
                  <Link to={"/pet"} className="petDLink">
                  Back to pets
                  </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PetDetail;