import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_lx098jj", "template_8r2o4ce", e.target, "o0GR0j9OZanGC0io-")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div style={{ marginTop: "5%", textAlign: "center" }}>
      <div style={{ textAlign: "start" }}>
        <div
          className="form1"
          style={{
            borderStyle: "solid",
            borderRadius: "15px",
            height: "470px",
            width: "75%",
            margin: "2%",
            marginLeft: "12%",
          }}
        >
          <h1>Contact Us!</h1>

          <form
            onSubmit={sendEmail}
            className="residentDashboard"
            style={{ border: "hidden" }}
          >
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Please enter your name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Email</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Please enter your email.."
                  style={{ marginTop: "0.5rem" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Feedback</label>
              </div>
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="10"
                style={{ width: "60%", marginTop: "1rem" }}
              ></textarea>
              <div style={{ textAlign: "center" }}>
                <button className="button" id="submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <h1>
        We appreciate your Feedback! Thank you!!
        <span style={{ fontSize: "80px", marginLeft: "1rem" }}>&#128515;</span>
      </h1>
    </div>
  );
}
