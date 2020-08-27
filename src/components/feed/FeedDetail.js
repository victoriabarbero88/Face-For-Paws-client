import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class FeedDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    window.scrollTo(0, 0);
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
      .get(`${process.env.REACT_APP_API_URI}/user-routes/feed/${params.id}`)
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
      <div className="feedDGeneral">
        <header className="FeedDHeader">
          <h1>A {this.state.name}'s Feed</h1>
        </header>
        <div className="feedLContainer">
          <div className="feedDDiv">
            <div className="feedArticle">
              <h3>{this.state.title}</h3>
              <img src={this.state.photo} alt="feed" style={{width: '100%'}} />
              <div className="feedText" >
                <p>{this.state.description}</p>
                <p className="feedName">{this.state.name}</p>
              </div>
            </div>
            <div className="feedDLinks">
              <div >
                <button className="button"><Link to={"/add-message"} className="feedDLink">Contact {this.state.name}</Link></button>
                <br/>
                {/* <button className="button"><Link to={`/shelter/${this.state.shelter}`} className="feedDLink">See {this.state.name}'s profile</Link></button>
                <br/> */}
                <button className="button"><Link to={"/feed"} className="feedDLink">Back to Feeds</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedDetail;