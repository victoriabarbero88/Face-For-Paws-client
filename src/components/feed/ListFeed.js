import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListFeed extends Component {
  constructor() {
    super();
    this.state = { listOfFeeds: [] };
  }

  getAllFeeds = () => {
    axios.get(`http://localhost:4000/user-routes/feed`).then(responseFromApi => {
      this.setState({
        listOfFeeds: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllFeeds();
  }

  render() {
    return (
      <div className="feedLGeneral">
        <h1>Feeds</h1>
        <div className="feedLContainer">
          <div className="feedLStyle">
            {this.state.listOfFeeds.map(feed => {
              return (
                <div key={feed._id} className="feedDiv">
                  <Link to={`/feed/${feed._id}`} className="feedLink">
                    <h3>{feed.title}</h3>
                    <img src={feed.photo} alt="feed" style={{width: '100%', maxWidth: 300}}/>
                    <div className="feedText" >
                      <p>{feed.description}</p>
                      <p className="feedName">{feed.name}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Link to={"/add-feed"} className="plusimg">
            <img src="../../assets/plus.png" alt=""/>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListFeed;