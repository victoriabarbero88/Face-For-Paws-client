import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListShelters extends Component {
  constructor() {
    super();
    this.state = { listOfShelters: [] };
  }

  getAllShelters = () => {
    axios.get(`http://localhost:4000/user-routes/shelter`).then(responseFromApi => {
      this.setState({
        listOfShelters: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllShelters();
  }

  render() {
    return (
      <div>
      <h1>Shelters</h1>
        <div className="shelterContainer">
          <div className="shelterStyle">
            {this.state.listOfShelters.map(shelter=> {
              return (
                <div key={shelter._id}>
                  <Link to={`/shelter/${shelter._id}`}>
                    <img src={shelter.photo[0].medium} alt="shelter" style={{width: '100px'}}/>
                    <p>{shelter.name}</p>
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