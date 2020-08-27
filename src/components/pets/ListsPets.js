import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



class ListsPets extends Component {
  constructor() {
    super();
    this.state = { listOfPets: [] };
  }

  getAllPets = () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user-routes/pet`).then(responseFromApi => {
      this.setState({
        listOfPets: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getAllPets();
  }

  render() {
    return (
      <div className="PetLGeneral">
        <header className="PetHeader">
          <h1>PawFamily</h1>
        </header>
        <div className="petContainer">
          <div className="petLStyle">
            {this.state.listOfPets.map(pet => {
              return (
                <div key={pet._id} className="petLDiv" >
                  <Link to={`/pet/${pet._id}`} className="petLink">
                    <h3>Hi! I'm {pet.name}</h3>
                    {pet.photo[0].medium ? (
                      <img src={pet.photo[0].medium} alt="pet" style={{width: '100%'}}/>
                    ) : 
                      <img src={pet.photo} alt="pet" style={{width: '100%'}}/>
                      }
                  </Link>
                </div>
              );
            })}
          </div> 
        </div>
      </div>
    );
  }
}

export default ListsPets;