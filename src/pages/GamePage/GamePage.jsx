import "../GamePage/GamePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiGameID, apiGameScreenshots } from "../Utilities/API";

function GamePage() {
  const param = useParams();
  const id = param.id;

  const [selectedGame, setSelectedGame] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?&key=fd5e01bfaeee4bcc905db6d589957270`
      )
      .then((response) => {
        setSelectedGame(response.data);
      });
  }, []);

  return (
    <>
      <h1 className="selected-game">Selected Game</h1>
      <section className="selected-game__container">
        <div className="selected-game__background-image">
          <h2 className="selected-game__title">Game Name</h2>
        </div>
        <p className="selected-game__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          nobis ipsam illo reprehenderit ex minima a, cumque ipsa nam sed
          officia nostrum neque tempore quibusdam. Officiis, sit! Autem,
          assumenda veniam?
        </p>
        <div className="selected-game__screenshots-container">
          <img className="selected-game__screenshot" src="#" />
          <img className="selected-game__screenshot" src="#" />
          <img className="selected-game__screenshot" src="#" />
          <img className="selected-game__screenshot" src="#" />
          <img className="selected-game__screenshot" src="#" />
        </div>
      </section>
    </>
  );
}

export default GamePage;

//FROM apiGameID    --> id, name, description , released, background_image, website,
// FROM apiGameScreenshots --> image
