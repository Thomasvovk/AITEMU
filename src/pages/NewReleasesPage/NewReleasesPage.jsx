import "../NewReleasesPage/NewReleasesPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { apiRecentGamesReleases } from "../Utilities/API";
import Card from "../../components/Card/Card";
import axios from "axios";

function NewReleasesPage() {
  const [newReleases, setnewReleases] = useState([]);
  const arr = [];

  useEffect(() => {
    axios.get(apiRecentGamesReleases).then((response) => {
      arr.push(response.data.results);
      setnewReleases(response.data.results);
    });
  }, []);

  // function openGame(id) {
  //   console.log(id);
  // }

  return (
    <>
      <h1 className="home__buttom-title">New Releases</h1>
      <div className="home__games">
        {newReleases.map((item) => {
          return (
            <Link to={`/game/${item.id}`}>
              <Card
                name={item.name}
                image={item.background_image}
                id={item.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default NewReleasesPage;
