import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListShelters extends Component {
  constructor() {
    super();
    this.state = { listOfShelters: [] };
  }

  getAllShelters = () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user-routes/shelter`).then(responseFromApi => {
      this.setState({
        listOfShelters: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getAllShelters();
  }

  render() {
    return (
      <div className="PetLGeneral">
        <header className="PetHeader">
          <h1>Shelters</h1>
        </header>
        <div className="petContainer">
          <div className="petLlStyle">
            {this.state.listOfShelters.map(shelter=> {
              return (
                <div key={shelter._id} className="shelterDiv" >
                  <Link to={`/shelter/${shelter._id}`} className="shelterLink">
                    <h3>{shelter.name}</h3>
                    {shelter.photo ? 
                    (
                      shelter.photo[0].medium ? 
                        (<img src={shelter.photo[0].medium} alt="pet" style={{width: '100%'}}/>)
                        : 
                        (<img src={shelter.photo[0]} alt="pet" style={{width: '100%'}}/>)
                      
                    )
                    : null
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

export default ListShelters;