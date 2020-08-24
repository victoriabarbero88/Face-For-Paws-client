import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class FeedDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleFeed();
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getSingleFeed = () => {
    const { params } = this.props.match;
    //console.log(params)
    axios
      .get(`http://localhost:4000/user-routes/feed/${params.id}`)
      .then(resonseFromApi => {
        const theFeed = resonseFromApi.data;
        this.setState(theFeed);
        console.log(theFeed)
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    return (
      <div className="feedLGeneral">
      <h1>A {this.state.name}'s Feed</h1>
        <div className="feedLContainer">
          <div className="feedDiv">
            <h3>{this.state.title}</h3>
            <img src={this.state.photo} alt="feed" style={{width: '100%', maxWidth: 300}} />
            <div className="feedText" >
              <p>{this.state.description}</p>
              <p className="feedName">{this.state.name}</p>
            </div>
            <Link to={"/feed"}className="feedLink">
            Back to Feed
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedDetail;