import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Home() {
  return (
    <div className="home">
      <h1> Portal for residents of Margarita </h1>
      <div className="siteInfo">
        <div className="content">
          Margarita is a beautiful Island located in South America; it belongs
          to Venezuela. This island gets its budget from Central government
          based on its population. Siremar aims to keep a dynamic count of all
          residents of the Island so that the island can get a stable, sound
          budget from Central Government. The system will require all Residents
          to register. Registration can be online or in our offices. Siremar
          will provide an ID and a lot of benefits to residents.
        </div>

        <img
          alt="Margarita"
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg"
          className="image1"
        />
      </div>
      <br />
      <button>
        <Link
          style={{
            textDecoration: "none",
            color: "#e91e63",
            fontWeight: "bolder",
          }}
          to="/login"
        >
          Explore More
        </Link>
      </button> 
    </div>
  );
}
