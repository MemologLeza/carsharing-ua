import React from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";
const MainContent = () => {
  return (
    <div className="homepage-container">
      <section className="container mt-5">
        <div className="welcome-section">
          <h1>Welcome to CarRent</h1>
          <p>
            Discover the joy of hassle-free car rentals in Ukraine with CarRent.
          </p>
          <hr />
          <p>
            Whether you're planning a weekend getaway or a month-long road trip,
            we have the perfect car for every occasion.
          </p>
          <Link className="explore-button" to="/catalog" role="button">
            Explore Our Fleet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
