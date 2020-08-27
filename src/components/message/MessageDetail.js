import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class MessageDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.getSingleMessage();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSingleMessage = () => {
    const { params } = this.props.match;
    //console.log(params)
    axios
      .get(`${process.env.REACT_APP_API_URI}/user-routes/message/${params.id}`)
      .then(resonseFromApi => {
        const theMessage = resonseFromApi.data;
        this.setState(theMessage);
        console.log(theMessage)
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    return (
      <div className="feedLGeneral">
      <h1>A {this.state.name}'s Message</h1>
        <div className="feedLContainer">
          <div className="feedDiv">
            <h3>{this.state.title}</h3>
            <img src={this.state.photo} alt="feed" style={{width: '100%', maxWidth: 300}} />
            <div className="feedText" >
              <p>{this.state.description}</p>
              <p className="feedName">{this.state.name}</p>
            </div>
            <Link to={"/feed"}className="feedLink">
            Back to Messages
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageDetail;