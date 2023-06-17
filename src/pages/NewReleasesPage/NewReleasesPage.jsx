import "../NewReleasesPage/NewReleasesPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { apiRecentGamesReleases } from "../Utilities/API";
import Card from "../../components/Card/Card";
import axios from "axios";

function NewReleasesPage() {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get(apiRecentGamesReleases).then((response) => {
      const list = response.data.results.map((item) => {
        const [api, imagePath] = item.background_image.split("media/");
        item.background_image = `${api}media/resize/640/-/${imagePath}`;
        return item;
      });
      setNewReleases(list);
    });
  }, []);

  function openGame(id) {
    console.log(id);
  }

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
