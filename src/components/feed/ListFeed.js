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
        listOfPets: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllFeeds();
  }

  render() {
    return (
      <div>
        <h1>Feeds</h1>
        <div>
          {this.state.listOfFeeds.map(feed => {
            return (
              <div key={feed._id}>
                <Link to={`/feed/${feed._id}`}>
                  <h3>{feed.title}</h3>
                  <p>{feed.name}</p>
                  <img src={feed.photo} alt="feed"/>
                  <p>{feed.description}</p>
                </Link>
              </div>
            );
          })}
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