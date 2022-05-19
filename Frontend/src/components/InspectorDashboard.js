import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import axios from "axios";
import { deleteByID, registerEntity, registerUser, url } from "../utils/auth";
import Chat from "./Chat";

export default function InspectorDashboard() {
  const getList = async (table) => {
    return axios({
      url: url + "getlist",
      method: "post",
      data: {
        table: table,
      },
    }).then((res) => {
      console.log(res.data);
      if (table === "county") {
        setCountyDetails(res.data);
      }
    });
  };

  useEffect(() => {
    getList("county");
  }, []);

  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];

  const [entity, setEntity] = useState("");
  const [value, setValue] = React.useState("1");
  const [countyDetails, setCountyDetails] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="inspectorDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Officer!
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
              <Tab
                label="Registration"
                style={{ fontSize: "large" }}
                value="1"
              />
              <Tab label="Management" style={{ fontSize: "large" }} value="2" />
              <Tab label="Chat" style={{ fontSize: "large" }} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Inspector</h2>
                <form id="userForm">
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="name" placeholder="Full Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="email"
                        placeholder="Mention email.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="phNo" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dob"
                        placeholder="Date of Birth.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="pob"
                        placeholder="Place of Birth"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          name: document.getElementById("name").value,
                          date: document.getElementById("dob").value,
                          pob: document.getElementById("pob").value,
                          pass: "siremar123",
                          cpass: "siremar123",
                          email: document.getElementById("email").value,
                          phNo: document.getElementById("phNo").value,
                          userType: "IP",
                        };

                        registerUser(data, true);
                        alert("Created Successfully!");
                        document.getElementById("userForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Move Out</h2>
                <form id="moveOutForm">
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="l_add"
                        placeholder="Mention next address.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="mod"
                        placeholder="Date of moving out.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <textarea
                        id="mres"
                        placeholder="We would love to know the reason for move out..."
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          currentLocation:
                            document.getElementById("l_add").value,
                          moveOutDate: document.getElementById("mod").value,
                          reason: document.getElementById("mres").value,
                          userId: JSON.parse(
                            window.sessionStorage.getItem("user")
                          )["id"],
                        };

                        registerEntity(data, "insertMoveOut.php");
                        document.getElementById("moveOutForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Business</h2>
                <form id="busForm">
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="bName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="dos"
                        placeholder="Date of Registration.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="btype"
                        placeholder="Business Type..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="bown"
                        placeholder="Name of Owner..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="binit"
                        placeholder="Initial investment..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const business = {
                          Name: document.getElementById("bName").value,
                          Owner: document.getElementById("bown").value,
                          Type: document.getElementById("btype").value,
                          Investment: document.getElementById("binit").value,
                          StartedOn: document.getElementById("dos").value,
                        };
                        // registerBusiness(business);
                        registerEntity(business, "insertBusiness.php");
                        alert(`Business successfully created`);
                        document.getElementById("busForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Discount</h2>
                <form id="disForm">
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="dis" placeholder="Amount" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <select name="userType" id="fType">
                        <option value="event">Event</option>
                        <option value="flight">Flights</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="ed"
                        placeholder="Date of expiry.."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const data = {
                          discount: document.getElementById("dis").value,
                          domain: document.getElementById("ftype").value,
                          expiryDate: document.getElementById("ed").value,
                        };

                        registerEntity(data, "insertDiscounts.php");
                        alert("Discount successfully added!");
                        document.getElementById("disForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Flights</h2>
                <form id="FlForm">
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="fnum"
                        placeholder="Flight number.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="dloc"
                        placeholder="Mention Departure loc.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="aloc"
                        placeholder="Arrival location.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="datetime-local"
                        id="dt"
                        placeholder="Departure time.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="datetime-local"
                        id="at"
                        placeholder="Time of arrival.."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const flight = {
                          flightNumber: document.getElementById("fnum").value,
                          departureTime: document.getElementById("dt").value,
                          arrivalTime: document.getElementById("at").value,
                          departureLocation:
                            document.getElementById("dloc").value,
                          arrivalLocation:
                            document.getElementById("aloc").value,
                        };

                        registerEntity(flight, "insertFlights.php");
                        alert(`Flight successfully created`);
                        document.getElementById("FlForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Hospital</h2>
                <form id="hospForm">
                  <div className="row">
                    <div className="col-75">
                      <input type="text" id="hName" placeholder="Name.." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="time"
                        id="stime"
                        placeholder="Start time..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input type="time" id="etime" placeholder="End time..." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="hloc"
                        placeholder="Location of hospital..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="hd"
                        placeholder="Name of Head Doctor..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const hosp = {
                          name: document.getElementById("hName").value,
                          headDoctor: document.getElementById("hd").value,
                          startTime: document.getElementById("stime").value,
                          endTime: document.getElementById("etime").value,
                          location: document.getElementById("hloc").value,
                        };

                        // registerHospital(hosp);
                        registerEntity(hosp, "insertHospital.php");
                        alert(`Hospital successfully created`);
                        document.getElementById("hospForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="form1"
                style={{
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register School</h2>
                <form id="schoolForm">
                  <div className="row">
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
                      registerEntity(data, "insertSchool.php");
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
                  width: "120%",
                  margin: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register Event</h2>
                <form id="eveForm">
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="ename"
                        name="schoolname"
                        placeholder="Event name.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="eType"
                        name="location"
                        placeholder="Event Type.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="eloc"
                        name="register"
                        placeholder="Event Location.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="date"
                        id="edt"
                        name="register"
                        placeholder="Event Date.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="number"
                        id="ep"
                        name="register"
                        placeholder="Event Price.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="number"
                        id="edis"
                        name="register"
                        placeholder="Event Discount.."
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
                        eventName: document.getElementById("ename").value,
                        eventType: document.getElementById("etype").value,
                        location: document.getElementById("eloc").value,
                        date: document.getElementById("edt").value,
                        price: document.getElementById("ep").value,
                        discount: document.getElementById("edis").value,
                      };

                      registerEntity(data, "insertEvents.php");
                      alert("School created!");
                      document.getElementById("schoolForm").reset();
                    }}
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="countyDiv" style={{ paddingInline: "30%" }}>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Schools</th>
                    <th>Businesses</th>
                    <th>Hospitals</th>
                    <th>Population</th>
                    <th>Events</th>
                    <th>Actions</th>
                  </tr>
                  {countyDetails.map((value, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          <input defaultValue={value.name} />
                        </td>
                        <td>
                          <input defaultValue={value.school} />
                        </td>
                        <td>
                          <input defaultValue={value.business} />
                        </td>
                        <td>
                          <input defaultValue={value.hospital} />
                        </td>
                        <td>
                          <input defaultValue={value.population} />
                        </td>
                        <td>
                          <input defaultValue={value.event} />
                        </td>
                        <td>
                          <input
                            type="button"
                            id="update"
                            value="Update"
                            onClick={() => {
                              setEntity("Inspector");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              deleteByID("county", value.id);
                              countyDetails.splice(idx, 1);
                              setCountyDetails([...countyDetails]);
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <Chat />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
