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
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <Link to={"/pet"}>Back to pets</Link>
      </div>
    )
  }
}

export default PetDetail;