import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddPet from "./AddPet";

class ListsPets extends Component {
  constructor() {
    super();
    this.state = { listOfPets: [] };
  }

  getAllPets = () => {
    axios.get(`http://localhost:4000/user-routes/pet`).then(responseFromApi => {
      this.setState({
        listOfPets: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllPets();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfPets.map(pet => {
            return (
              <div key={pet._id}>
                <Link to={`/pet/${pet._id}`}>
                  <h3>{pet.name}</h3>
                  <img src={pet.photo} alt="pets"/>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <AddPet getData={() => this.getAllPets()} />
        </div>
      </div>
    );
  }
}

export default ListsPets;