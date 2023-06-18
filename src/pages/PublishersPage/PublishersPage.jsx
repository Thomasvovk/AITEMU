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
      <h1 className="publishers__buttom-title">Publishers</h1>

      <div className="publishers__character-container">
        <p className="publishers__character-subheader">
          Discover the game-changing publishers behind your favorite titles on
          our Game Publishers page. From industry giants to independent studios,
          explore their diverse portfolios and upcoming releases. Stay updated,
          connect with fellow gamers, and celebrate the creativity that shapes
          the gaming industry. Start exploring today!
        </p>
        <div className="publishers__character-right"></div>
      </div>

      <div className="publishers__games">
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
