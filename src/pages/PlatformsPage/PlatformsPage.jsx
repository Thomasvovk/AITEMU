import "../PlatformsPage/PlatformsPage.scss";
import { useEffect, useState } from "react";
import { apiAllPlatforms } from "../Utilities/API";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Platforms() {
  const [allPlatforms, setallPlatforms] = useState([]);
  const arr = [];

  useEffect(() => {
    axios.get(apiAllPlatforms).then((response) => {
      arr.push(response.data.results);
      setallPlatforms(response.data.results);
    });
  }, []);
  return (
    <>
      <h1 className="home__buttom-title">Platforms</h1>
      <div className="home__games">
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
