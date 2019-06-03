import React, { Component } from "react";

export default class ChatBox extends Component {
  render() {
    return (
      <React.Fragment>
        <center><section className="ChatBox">
          {this.props.chat.map((chat) => (
            <div key={chat.id} className="">
              <hr />
              {chat.message}
              <hr />
             
              <button
                type=""
                className=""
                onClick={() => {
                  this.props.history.push(`/chat/${chat.id}/edit`);
                }}
              >
                Edit
              </button>
              <button
                className=""
                onClick={() => this.props.deleteMessages(chat.id)}
              >
                Delete it
              </button>
            </div>
          ))}
        </section></center>
      </React.Fragment>
    );
  }
}
