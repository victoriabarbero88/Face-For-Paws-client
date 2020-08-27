import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class SheleterDetail extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  
  componentDidMount() {
    this.getSingleShelter();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSingleShelter = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/shelter/${params.id}`)
      .then(responseFromApi => {
        const theShelter = responseFromApi.data;
        console.log(theShelter)
        this.setState(theShelter);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){
    console.log(this.state.pets)
    return (
      <div className="shelterGeneral">
        <h1>{this.state.name}</h1>
        <div className="shelterContainer">
          <div className="shelterStyle">
            <div className="shelterDDiv">
              {this.state.photo ? (
              <img src={this.state.photo[0].medium} alt="shelter" style={{width: '150%', maxWidth: 200}}/>
              ) : null}
              <div className="shelterDText">
                <p>Location: {this.state.location}</p>
                <p>Phone number: {this.state.phone}</p>
                <p>Website: <Link src={this.state.website}>{this.state.website}</Link></p>
                <p>{this.state.description}</p>
                
                <div className="petShelter">
                   {this.state.pets ? this.state.pets.map(pet => {
                    return (
                    <div key={pet._id} className="petLDiv" >
                      <Link to={`/pet/${pet._id}`} className="petLink">
                        <p>{pet.name}</p>
                          {pet.photo[0] ? (
                        <img src={pet.photo[0].full} alt="pet" style={{width: '100%', maxWidth: 200}}/>
                            ) : null}
                      </Link>
                    </div> 
                    )
                     }) : null} 
                </div>  
                <Link to={"/add-message"}>Contact</Link>
              
              <Link to={"/shelter"} className="shelterDLink">
              Back to Shelters
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SheleterDetail;
