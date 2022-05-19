import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";

import Chat from "./Chat";
import DetailChart from "./DetailChart";
import { deleteByID, registerEntity, url } from "../utils/auth";

export default function AdminDashboard() {
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
      if (table === "hospital") {
        setHospitalDetails(res.data);
      }
      if (table === "business") {
        setBusinessDetails(res.data);
      }
    });
  };

  useEffect(() => {
    getList("county");
    getList("business");
    getList("hospital");
    // getList('event');
  }, []);

  var [countyDetails, setCountyDetails] = useState([]);
  // var [eventDetails, setEventDetails] = useState([]);
  var [businessDetails, setBusinessDetails] = useState([]);
  var [hospitalDetails, setHospitalDetails] = useState([]);

  const [showChart, setShowChart] = useState(false);
  const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Welcome"];
  const [value, setValue] = useState("1");
  const [entity, setEntity] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="adminDashboard">
      <div className="welcomeDiv">
        <h1>
          {greetings[Math.floor(Math.random() * greetings.length)]} Admin!
        </h1>
      </div>
      <Box sx={{ width: "100%", display: "flex" }}>
        <TabContext value={value}>
          <Tabs
            style={{
              alignItems: "flex-start",
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "min-content",
            }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab value="1" label="Counties" />
            <Tab value="2" label="Features" />
            <Tab value="3" label="Chat" />
          </Tabs>
          <hr style={{ marginRight: "1rem", marginLeft: "inherit" }} />

          <TabPanel value="1" sx={{ width: "100%" }}>
            <h1>County Section</h1>
            <div className="countyDiv">
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
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
                  marginInline: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>Register County</h2>
                <form id="cForm">
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cname"
                        placeholder="County Name.."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cpopulation"
                        placeholder="Total population"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cschools"
                        placeholder="Number of Schools"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cbusiness"
                        placeholder="Number of Businesses"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="CHosp"
                        placeholder="Number of Hospitals"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="Cevents"
                        placeholder="Number of Events"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="button"
                      id="submit"
                      value="Submit"
                      onClick={() => {
                        const county = {
                          name: document.getElementById("Cname").value,
                          school: document.getElementById("Cschools").value,
                          population:
                            document.getElementById("Cpopulation").value,
                          business: document.getElementById("Cbusiness").value,
                          hospital: document.getElementById("CHosp").value,
                          event: document.getElementById("Cevents").value,
                        };
                        console.log(county);
                        registerEntity(county, "insertcounty");
                        setCountyDetails([...countyDetails, county]);
                        alert("County successfully created!");
                        document.getElementById("cForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div style={{ marginLeft: "50%" }}>
              <input
                style={{ textAlign: "center", margin: "auto" }}
                id="submit"
                type="button"
                value="Show Chart"
                onClick={() => setShowChart(!showChart)}
              />
            </div>
            {showChart && <DetailChart county={countyDetails} />}
          </TabPanel>

          <TabPanel value="2" sx={{ width: "100%" }}>
            <h1>Feature Section</h1>
            <div className="featDiv">
              <table
                className="table"
                style={{
                  display: "inline-table",
                  width: "fit-content",
                  margin: "auto",
                }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Type</th>
                    <th>Investment</th>
                    <th>Started On</th>
                    <th>Actions</th>
                  </tr>
                  {businessDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <input defaultValue={value.Name} />
                        </td>
                        <td>
                          <input defaultValue={value.Owner} />
                        </td>
                        <td>
                          <input defaultValue={value.Type} />
                        </td>
                        <td>
                          <input defaultValue={value.Investment} />
                        </td>
                        <td>
                          <input defaultValue={value.StartedOn} />
                        </td>
                        <td>
                          <input
                            type="button"
                            id="update"
                            value="Update"
                            onClick={() => {
                              setEntity("Business");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              deleteByID("business", value.Id);
                              businessDetails.splice(key, 1);
                              setBusinessDetails([...businessDetails]);
                              alert(`Business successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
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
                        registerEntity(business, "insertbusiness");
                        setBusinessDetails([...businessDetails, business]);
                        alert(`Business successfully created`);
                        document.getElementById("busForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="featDiv">
              <table
                className="table"
                style={{
                  display: "inline-table",
                  width: "fit-content",
                  margin: "auto",
                }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Head Doctor On</th>
                    <th>Actions</th>
                  </tr>
                  {hospitalDetails.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <input defaultValue={value.name} />
                        </td>
                        <td>
                          <input defaultValue={value.location} />
                        </td>
                        <td>
                          <input defaultValue={value.startTime} />
                        </td>
                        <td>
                          <input defaultValue={value.endTime} />
                        </td>
                        <td>
                          <input defaultValue={value.headDoctor} />
                        </td>
                        <td>
                          <input
                            type="button"
                            id="update"
                            value="Update"
                            onClick={() => {
                              setEntity("Hospital");
                              alert(`${entity} successfully updated`);
                            }}
                          />
                          <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={() => {
                              hospitalDetails.splice(key, 1);
                              setHospitalDetails([...hospitalDetails]);
                              setEntity("Hospital");
                              alert(`${entity} successfully deleted`);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div
                className="form1"
                style={{
                  float: "right",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  display: "block",
                  width: "40%",
                  marginX: "2%",
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
                        registerEntity(hosp, "inserthospital");
                        setHospitalDetails([...hospitalDetails, hosp]);
                        alert(`Hospital successfully created`);
                        document.getElementById("hospForm").reset();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="3" sx={{ width: "100%" }}>
            <Chat />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
