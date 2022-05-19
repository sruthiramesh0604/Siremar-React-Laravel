import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import {
  url,
  registerEntity,
} from "../utils/auth";
import Chat from "./Chat";

export default function ResidentDashboard() {
  const getList = async (table) => {
    return axios({
      url: url + "getlist",
      method: "post",
      data: {
        table: table,
      },
    }).then((res) => {
      // console.log(res.data);
      if (table === "flights") {
        setFlightDetails(res.data);
      }
      if (table === "events") {
        setEventDetails(res.data);
      }
      if (table === "schools") {
        setSchoolDetails(res.data);
      }
      if (table === "hospital") {
        setHospitalDetails(res.data);
      }
      if (table === "business") {
        setBusinessDetails(res.data);
      }
    });
  };

  useEffect(() => {
    getList("flights");
    getList("events");
    getList("schools");
    getList("hospital");
    getList("business");
  }, []);

  var [eventDetails, setEventDetails] = useState([]);
  var [flightDetails, setFlightDetails] = useState([]);
  var [schoolDetails, setSchoolDetails] = useState([]);
  var [businessDetails, setBusinessDetails] = useState([]);
  var [hospitalDetails, setHospitalDetails] = useState([]);

  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="residentDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Resident
        </h1>
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 4, borderColor: "CaptionText" }}>
            <TabList
              onChange={handleChange}
              centered
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label="Offers" style={{ fontSize: "large" }} value="1" />
              <Tab label="Near By" style={{ fontSize: "large" }} value="2" />
              <Tab label="Register" style={{ fontSize: "large" }} value="3" />
              <Tab label="Chat" style={{ fontSize: "large" }} value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* Flight Details Table */}
            <div className="dashboardContent">
              <div className="tableBox">
                <table className="table">
                  <caption>Flight Details</caption>
                  <tbody style={{ display: "contents" }}>
                    <tr>
                      <th>Flight</th>
                      <th>Departure Time</th>
                      <th>Arrival Time</th>
                      <th>Departure Location</th>
                      <th>Arrival Location</th>
                    </tr>
                    {flightDetails.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.flightNumber}</td>
                          <td>{value.departureTime}</td>
                          <td>{value.arrivalTime}</td>
                          <td>{value.departureLocation}</td>
                          <td>{value.arrivalLocation}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Ticket Discount Table */}
              <div className="tableBox">
                <table className="table">
                  <caption>Upcoming Events</caption>
                  <tbody style={{ display: "contents" }}>
                    <tr>
                      <th>Name</th>
                      <th>Event Type</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Price</th>
                      <th>Discount</th>
                    </tr>
                    {eventDetails.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.eventName}</td>
                          <td>{value.eventType}</td>
                          <td>{value.location}</td>
                          <td>{value.date}</td>
                          <td>{value.price}</td>
                          <td>{value.discount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>
              <h2 style={{ textAlign: "center" }}>
                Get connected with places at Margarita!
              </h2>
            </div>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Hospitals</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  {hospitalDetails.map((value, key) => {
                    return (
                      <li key={key}>
                        {value.name} at {value.location}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Schools</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  {schoolDetails.map((value, key) => {
                    return (
                      <li key={key}>
                        {value.name} at {value.location}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  margin: "auto",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Businesses</h3>
                <hr />
                <ul style={{ margin: "1rem", padding: "1rem" }}>
                  {businessDetails.map((value, key) => {
                    return (
                      <li key={key}>
                        {value.Name} {value.Type}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "10%",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <h2>Register School</h2>
              <form id="schoolForm">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="sname">School Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="sname"
                      name="schoolname"
                      placeholder="School name.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="sloc">Location</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="sloc"
                      name="location"
                      placeholder="School location.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="sloc">RegisteredBy</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="sreg"
                      name="register"
                      placeholder="School registered by.."
                    />
                  </div>
                </div>
                <br />
              </form>
              <div className="row">
                <input
                  id="submit"
                  value="Submit"
                  type="button"
                  onClick={() => {
                    const data = {
                      name: document.getElementById("sname").value,
                      location: document.getElementById("sloc").value,
                      registeredBy: document.getElementById("sreg").value,
                    };
                    // registerSchool(data);
                    registerEntity(data, 'insertSchool.php')
                    alert("School created!");
                    document.getElementById("schoolForm").reset();
                  }}
                />
              </div>
            </div>
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "40%",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <h2>Register your Company</h2>
              <form id="businessForm">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Company Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="bname"
                      name="comname"
                      placeholder="Company name.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Owner Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="bown"
                      name="comname"
                      placeholder="Company name.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="btype">Business Type</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="btype"
                      name="businessType"
                      placeholder="Business type.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Initial investment</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="binv"
                      name="initInv"
                      placeholder="Initial Investment.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Start date</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="date"
                      id="bstart"
                      name="initInv"
                      placeholder="Initial Investment.."
                    />
                  </div>
                </div>
                <br />
              </form>
              <div className="row">
                <input
                  id="submit"
                  type="button"
                  value="Submit"
                  onClick={() => {
                    const data = {
                      Name: document.getElementById("bname").value,
                      Type: document.getElementById("btype").value,
                      Investment: document.getElementById("binv").value,
                      Owner: document.getElementById("bown").value,
                      StartedOn: document.getElementById("bstart").value,
                    };

                    // registerBusiness(data);
                    registerEntity(data, 'insertBusiness.php')
                    document.getElementById("businessForm").reset();
                  }}
                />
              </div>
            </div>
            <div
              className="form1"
              style={{
                borderStyle: "solid",
                borderRadius: "15px",
                display: "block",
                width: "50%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              <h2>Register Move Out</h2>
              <form id="moveOutForm">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="btype">Latest Address</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="madd"
                      name="l_add"
                      placeholder="Mention your next address.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Move out Date</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="date"
                      id="mod"
                      name="mod"
                      placeholder="Date of moving out.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="subject">Reason</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      id="mres"
                      name="feedback"
                      placeholder="We would love to have your feedback on Margarita..."
                      style={{ height: "200px" }}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className="row">
                  <input
                    id="submit"
                    type="button"
                    value="Submit"
                    onClick={() => {
                      const data = {
                        currentLocation: document.getElementById("madd").value,
                        moveOutDate: document.getElementById("mod").value,
                        reason: document.getElementById("mres").value,
                        userId: JSON.parse(
                          window.sessionStorage.getItem("user")
                        )["id"],
                      };

                      // registerMoveOut(data);
                      registerEntity(data, 'insertMoveOut.php')
                      document.getElementById("moveOutForm").reset();
                    }}
                  />
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel value="4">
            <Chat />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
