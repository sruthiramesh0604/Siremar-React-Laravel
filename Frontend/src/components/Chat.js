import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";

export default function Chat() {
  const [username, setUsername] = useState(
    JSON.parse(window.sessionStorage.getItem("user")).Name
  );
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  let allMessages = [];

  useEffect(() => {
    // Pusher.logToConsole = true;

    const pusher = new Pusher("c73cdd6b9714e9959521", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        message,
      }),
    });

    setMessage("");
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>
        {" "}
        Connect Margarita!!{" "}
        <i style={{ fontSize: "3rem" }} className="fas">
          &#xf086;
        </i>{" "}
      </h1>

      <div className="chatDiv">
        <div className="chatBox" style={{ width: "100%" }}>
          <div className="chat">
            {messages.length > 0 ? (
              messages.map((message) => {
                return (
                  <div className="list-group-item list-group-item-action py-3 lh-tight">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">{message.username}</strong>
                    </div>
                    <div className="col-10 mb-1 small">{message.message}</div>
                  </div>
                );
              })
            ) : (
              <span>
                Hello {username}, please send a message to start a conversation!{" "}
              </span>
            )}
          </div>
          <hr />
          <form onSubmit={(e) => submit(e)}>
            <input
              type="text"
              className="form-control"
              placeholder="Write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button id="submit" type="submit">
              <i
                style={{
                  fontSize: "1rem",
                  textDecoration: "pointer",
                }}
                className="fa"
              >
                &#xf1d9; <span style={{ 'fontFamily': 'Libre-Baskerville' }}>Send</span>
              </i>
            </button>
          </form>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
    //     <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
    //       <input
    //         className="fs-5 fw-semibold"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="list-group list-group-flush border-bottom scrollarea">

    //     </div>
    //   </div>

    // </div>
  );
}
