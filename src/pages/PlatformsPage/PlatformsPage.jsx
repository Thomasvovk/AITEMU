import "../PlatformsPage/PlatformsPage.scss";
import { useEffect, useState } from "react";
import { apiPlatformsList } from "../Utilities/API";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Platforms() {
  const [allPlatforms, setallPlatforms] = useState([]);
  const arr = [];

  useEffect(() => {
    axios.get(apiPlatformsList).then((response) => {
      arr.push(response.data.results);
      setallPlatforms(response.data.results);
    });
  }, []);
  return (
    <>
      <h1 className="platforms__buttom-title">Platforms</h1>
      <div className="platforms__character-container">
        <p className="platforms__character-subheader">
          Explore gaming across platforms on our Platforms page. Discover
          diverse experiences for PC, console, handheld, and mobile. Find
          exclusive titles, cross-platform favorites, and connect with
          like-minded players. Start your gaming journey today!
        </p>
        <div className="platforms__character-right"></div>
      </div>

      <div className="platforms__games">
        {allPlatforms.map((item) => {
          return (
            <Link to={`/platforms`}>
              <Card
                name={item.name}
                image={item.image_background}
                // id={item.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Platforms;
