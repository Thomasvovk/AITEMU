import "../HomePage/HomePage.scss";
import arrowIcon from "../../assets/images/icons/right-arrow.png";
import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home__description-container">
          <p className="home__description">
            AITEMU. - comprehensive online platform designed to serve as a hub
            for gamers and gaming enthusiasts.
          </p>
          <p className="home__description-detailed">
            aims to provide a user-friendly and feature-rich environment where
            users can discover, explore, and manage their favorite games & and
            organize their next game they want to play across all the platforms.
          </p>
        </div>
        <div className="home__divider"> </div>
        <div className="home__directions">
          <Link className="home__direction-link" to="/top-metacritic">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Top Metacritic</h2>
                <img
                  className="home__direction-icon"
                  src={arrowIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
          </Link>
          <Link className="home__direction-link" to="/platforms">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Platforms</h2>
                <img
                  className="home__direction-icon"
                  src={arrowIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
          </Link>
          <Link className="home__direction-link" to="/publishers">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Publishers</h2>
                <img
                  className="home__direction-icon"
                  src={arrowIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="home__divider-right"> </div>
      </div>
    </>
  );
}

export default HomePage;
