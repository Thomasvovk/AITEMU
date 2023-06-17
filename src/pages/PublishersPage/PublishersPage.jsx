import "../PublishersPage/PublishersPage.scss";
import { useEffect, useState } from "react";
import { apiPublishersList } from "../Utilities/API";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Publishers() {
  const [allPublishers, setAllPublishers] = useState([]);

  useEffect(() => {
    axios.get(apiPublishersList).then((response) => {
      const list = response.data.results.map((item) => {
        const [api, imagePath] = item.image_background.split("media/");
        item.image_background = `${api}media/resize/640/-/${imagePath}`;
        return item;
      });
      setAllPublishers(list);
    });
  }, []);

  return (
    <>
      <h1 className="home__buttom-title">Publishers</h1>
      <div className="home__games">
        {allPublishers.map((item) => {
          return (
            <Link to={`/game/${item.id}`}>
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

export default Publishers;
