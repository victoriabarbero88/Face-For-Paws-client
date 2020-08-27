import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListFeed extends Component {
  constructor() {
    super();
    this.state = { listOfFeeds: [] };
  }

  getAllFeeds = () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user-routes/feed`).then(responseFromApi => {
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
        <header className="FeedHeader">
          <div className="feedLTitlePlus">
            <Link to={"/add-feed"} className="plusimg">
              <img src="../../assets/plus.png" alt=""/>
            </Link>
          </div>
          <h1>Feeds</h1>
          </header>
        <div className="feedLContainer">
          <div className="feedLStyle">
            {this.state.listOfFeeds.map(feed => {
              return (
                <div key={feed._id} className="feedDiv">
                  <Link to={`/feed/${feed._id}`} className="feedLink">
                    <h3>{feed.title}</h3>
                    <div className="feedListImage">
                      <img src={feed.photo} alt="feed" style={{width: '100%'}}/>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default ListFeed;