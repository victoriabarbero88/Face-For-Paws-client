import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class SheleterDetail extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
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
      <div className="PetDGeneral">
        <header className="petDHeader">
          <h1>{this.state.name}</h1>
        </header>
        <div className="petContainer">
          <div className="shelterStyle">
            <div className="petDDiv">
            {this.state.photo ? 
              (
                this.state.photo[0].medium ? 
                  (<img src={this.state.photo[0].medium} alt="pet" style={{width: '100%'}}/>)
                  : 
                  (<img src={this.state.photo[0]} alt="pet" style={{width: '100%'}}/>)
                
              )
              : null
               }
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
                        {pet.photo ? 
                        (
                          pet.photo[0].medium ? 
                            (<img src={pet.photo[0].medium} alt="pet" style={{width: '100%'}}/>)
                            : 
                            (<img src={pet.photo[0]} alt="pet" style={{width: '100%'}}/>)
                        )
                        : null
                          }
                      </Link>
                    </div> 
                    )
                     }) : null} 
                </div> 
                <div className="petDButtons">
                  <button className="button">
                    <Link to={"/add-message"} className="petDLink">Contact</Link>
                  </button>
                  <br/>
                  <button className="button">
                    <Link to={"/shelter"} className="petDLink">
                      Back to Shelters
                    </Link>
                  </button>
                </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default SheleterDetail;
