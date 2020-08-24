import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


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
    axios
      .get(`http://localhost:4000/user-routes/feed/${params.id}`)
      .then(resonseFromApi => {
        const theFeed = resonseFromApi.data;
        this.setState(theFeed);
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()}</div>
        <Link to={"/feed"}>Back to Feed</Link>
      </div>
    )
  }
}

export default FeedDetail;