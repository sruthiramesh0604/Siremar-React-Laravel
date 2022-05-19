import React, { useRef, useState } from "react";
import { registerUser } from "../utils/auth";
import emailjs from "@emailjs/browser";

export default function Register() {
  const options = ["RE", "IP"];

  const [option, setOption] = useState("RE");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const form = useRef();

  const sendEmail = () => {
    console.log(form.current);
    emailjs
      .sendForm(
        "service_lx098jj",
        "template_cleow68",
        form.current,
        "o0GR0j9OZanGC0io-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-register">
      <div className="register">
        <h1>Register yourself! </h1>
        <div className="boxreg1">
          <form className="formreg1" ref={form}>
            <div className="input-bodyreg">
              <label htmlFor="Name" style={{ marginTop: "4%", width: "110px" }}>
                Name
              </label>
              <input
                id="name"
                name="to_name"
                placeholder="Enter your Name"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label htmlFor="Name" style={{ marginTop: "4%", width: "110px" }}>
                Phone Number
              </label>
              <input
                type="Name"
                id="phNo"
                placeholder="Enter your Phone number"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label htmlFor="Name" style={{ marginTop: "4%", width: "110px" }}>
                Place of Birth
              </label>

              <input
                type="Name"
                id="POB"
                placeholder="Enter your place of Birth"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="userType"
                style={{ marginTop: "4%", width: "110px" }}
              >
                User Type
              </label>
              <select
                id="userType"
                name="type"
                onChange={handleChange}
                value={option}
                style={{ width: "180px" }}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option === "RE" ? "Resident" : "Inspector"}
                  </option>
                ))}
              </select>
            </div>

            {option === "IP" && (
              <div>
                <div className="input-bodyreg">
                  <label
                    htmlFor="IPCode"
                    style={{ marginTop: "4%", width: "110px" }}
                  >
                    Inspector code
                  </label>
                  <input
                    type="password"
                    id="IC"
                    placeholder="Enter your secret inspector code"
                    required
                    className="input-sizereg"
                  />
                </div>
              </div>
            )}

            <div className="input-bodyreg">
              <label
                htmlFor="EmailID"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Email ID
              </label>

              <input
                type="Email"
                id="email"
                name="to_mail"
                placeholder="Enter your Email ID"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="Password"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Password
              </label>
              <input
                type="Password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="input-sizereg"
                required
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="DateOfBirth"
                style={{ marginTop: "4%", width: "105px" }}
              >
                Date of Birth
              </label>

              <input
                type="date"
                id="DOB"
                placeholder="MM/DD/YYYY"
                required
                className="input-sizereg"
              />
            </div>

            <div className="input-bodyreg">
              <label
                htmlFor="ConfirmPassword"
                style={{ marginTop: "4%", width: "110px" }}
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                className="input-sizereg"
              />
            </div>
          </form>

          <div className="btn-boxreg1">
            <button
              className="button"
              onClick={() => {
                const data = {
                  Name: document.getElementById("name").value,
                  date_of_birth: document.getElementById("DOB").value,
                  place_of_birth: document.getElementById("POB").value,
                  Password: document.getElementById("password").value,
                  confirm_password:
                    document.getElementById("confirmPassword").value,
                  email_id: document.getElementById("email").value,
                  phone_number: document.getElementById("phNo").value,
                  userType: option,
                };
                sendEmail();
                registerUser(data);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
