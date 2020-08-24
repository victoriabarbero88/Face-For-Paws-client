import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


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
      .get(`http://localhost:4000/user-routes/pet/${params.id}`)
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
      <div>
      <div>
        <h1>My name is {this.state.name}</h1>
        <h2>I'm available for {this.state.status}</h2>
        {this.state.photo ? (
            <img src={this.state.photo[0].medium} alt="pet" style={{width: '100%'}}/>
            ) : null}
        <p>I'm a {this.state.gender} {this.state.species}</p>
        <p>I'm {this.state.age} and I'm living in {this.state.location}</p>
        <p>Let me explain you a little bit about me:{this.state.description}</p>
        </div>
        <Link to={"/pet"}>
        Back to pets
        </Link>
      </div>
    )
  }
}

export default PetDetail;