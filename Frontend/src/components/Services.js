import React from "react";

export default function Services() {
  return (
    <div>
      <div class="services">
        <div className="ServicesTitle">
          <h1 class="servicesHead">Enjoy our Services!</h1>
          <hr />
        </div>
        <p class="serviceParagraph">
          <span>
            Margarita Island stands out for having all the necessary services
            for your care, comfort and protection. <br /> You will find the
            satisfaction of your basic needs, as well as the most sophisticated
            ones
          </span>
          <ul style={{ listStyle: "none", lineHeight: "2" }}>
            <li>
              Basic services - commodities: electricity, water, sanitation.
            </li>
            <li>
              Communication services: fixed telephony, cellular telephony,
              satellite telephony, satellite internet, fiber optic internet.
            </li>
            <li>Many restaurant and delivery services.</li>
            <li>Recreation services: Theme parks.</li>
            <li>Shopping centres: and first class shopping centres.</li>
            <li>Health services and public and private medical assistance.</li>
            <li>Land, sea and air transportation, private transportation.</li>
            <li>
              Tourist services, vehicle rental, air ticketing, transfers,
              excursions, boat and sailboat rental.
            </li>
            <li>Security and escort service.</li>
            <li>Multi-language translator service.</li>
            <li>Administrative, legal and financial consultancy service.</li>
            <li>
              Direct flight service to Maiquetía- Porlamar, Porlamar-Los Roques,
              Porlamar -Canaima.
            </li>
            <li>International flight service.</li>
          </ul>
        </p>

        <img
          alt="ServicesImg1"
          src="https://www.tourist-destinations.net/wp-content/uploads/2014/09/85.jpg"
          className="image1"
        />

        <img
          alt="ServicesImg2"
          src="https://traveldoneclever.com/wp-content/uploads/2020/01/day-trip-margarita-island-venezuela.jpg"
          className="image2"
        />
        <img
          alt="ServicesImg3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ4dGqyZUsQxhkVv8w2_Dc04837KLyu8mWA&usqp=CAU"
          className="image3"
          style={{ 'marginBottom': '15%' }}
        />

        <div class="footerblock">
          <ul class="aboutList">
            <li>
              <i class="fa-solid fa-location-pin locationI"></i>8139 NW 10th St,
              Oklahoma City, OK 73127
            </li>
            <li>
              <i class="fa-solid fa-phone"></i> +1 555 555 5555
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i> support@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
