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
        <div className="home__character-container">
          <h2 className=" home__character-subheader">
            <p>
              {" "}
              Explore a vast collection of games spanning various genres,
              platforms, and generations. From classic retro titles that invoke
              nostalgia to the latest cutting-edge releases that push the
              boundaries of gaming, we've got you covered. Our library offers an
              extensive range of games, ensuring there's something for everyone.
              Discover detailed game descriptions, captivating visuals, and
              insightful reviews that will help you make informed decisions
              about which games to play. Unleash your imagination as you embark
              on epic adventures, solve challenging puzzles, engage in intense
              multiplayer battles, or delve into immersive storytelling
              experiences.
            </p>
            {/* <p>
              Our user-friendly interface makes it easy to navigate through our
              library, allowing you to quickly find the games you're interested
              in. You can search by title, genre, platform, or even filter based
              on user ratings and popularity. Whether you're a console gamer, PC
              enthusiast, or prefer gaming on the go with mobile devices, our
              library supports a wide range of platforms. Stay up to date with
              the latest gaming news, industry trends, and upcoming releases
              through our informative articles and blog posts. Engage with a
              vibrant community of fellow gamers, share your thoughts, and
              participate in discussions. Connect with friends, form gaming
              groups, and challenge each other to exciting competitions. Join
              our gaming library today and unlock a world of entertainment,
              excitement, and endless possibilities. Start building your gaming
              legacy, discovering hidden gems, and experiencing the joy of
              gaming like never before. Welcome to the ultimate gaming
              destination!"
            </p> */}
          </h2>
          <div className="home__character"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
