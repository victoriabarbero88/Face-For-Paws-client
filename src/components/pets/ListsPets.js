import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



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
        <div className="petContainer">
          <div className="petStyle">
            {this.state.listOfPets.map(pet => {
              return (
                <div key={pet._id} >
                  <Link to={`/pet/${pet._id}`} className="petLink">
                    <h3>{pet.name}</h3>
                    {pet.photo[0] ? (
                      <img src={pet.photo[0].full} alt="pet" style={{width: '100%', maxWidth: 200}}/>
                    ) : null}
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