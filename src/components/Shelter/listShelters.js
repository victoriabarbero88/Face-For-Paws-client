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
    this.getAllShelters();
  }

  render() {
    return (
      <div className="shelterLGeneral">
      <h1>Shelters</h1>
        <div className="shelterLContainer">
          <div className="shelterlStyle">
            {this.state.listOfShelters.map(shelter=> {
              return (
                <div key={shelter._id} className="shelterDiv" >
                  <Link to={`/shelter/${shelter._id}`} className="shelterLink">
                    <h3>{shelter.name}</h3>
                    <img src={shelter.photo[0].medium} alt="shelter" style={{width: '100%', maxWidth: 150}}/>
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