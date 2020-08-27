import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class ListMessage extends Component {
  constructor() {
    super();
    this.state = { listOfMessages: [] };
  }

  getAllMessages= () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user-routes/message`).then(responseFromApi => {
      this.setState({
        listOfMessages: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getAllMessages();
  }

  render() {
    return (
      <div className="feedLGeneral">
        <h1>Messages</h1>
        <div className="feedLContainer">
          <div className="feedLStyle">
            {this.state.listOfMessages.map(message => {
              return (
                <div key={message._id} className="messageDiv">
                  <Link to={`/message/${message._id}`} className="feedLink">
                    <h3>{message.title}</h3>
                    <img src={message.photo} alt="message" style={{width: '100%', maxWidth: 300}}/>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Link to={"/add-message"} className="plusimg">
            <img src="../../assets/plus.png" alt=""/>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListMessage;