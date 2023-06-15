import "../GamePage/GamePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-do-black.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";

function GamePage() {
  const param = useParams();
  const id = param.id;

  const [selectedGame, setSelectedGame] = useState({});
  const [selectedGameScreenshots, setselectedGameScreenshots] = useState([]);
  const [selectedGameTrailer, setselectedGameTrailer] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?&key=fd5e01bfaeee4bcc905db6d589957270`
      )
      .then((response) => {
        setSelectedGame(response.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}/screenshots?&key=fd5e01bfaeee4bcc905db6d589957270`
      )
      .then((response) => {
        setselectedGameScreenshots(response.data.results);
        console.log(response.data.results);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}/movies?&key=fd5e01bfaeee4bcc905db6d589957270`
      )
      .then((response) => {
        setselectedGameTrailer(response.data.results);
        console.log(response.data.results);
      });
  }, [id]);

  return (
    <>
      <h1 className="selected-game">{selectedGame.name}</h1>
      <section className="selected-game__container">
        <div className="selected-game__image-container">
          <img
            className="selected-game__background-image"
            src={selectedGame.background_image}
          />
          <p className="selected-game__short-website">Release Date</p>
          <p className="selected-game__short-release">
            {selectedGame.released}
          </p>
          <p className="selected-game__short-metacritic">
            {selectedGame.metacritic}
          </p>
          <img className="selected-game__icon" src={favouriteIcon} />
          <img className="selected-game__icon" src={completedIcon} />
          <img className="selected-game__icon" src={inprogressIcon} />
          <img className="selected-game__icon" src={toplayIcon} />
        </div>
        <div>
          <video>{selectedGameTrailer.data}</video>
        </div>
        <h2 className="selected-game__title">Description</h2>
        <p className="selected-game__description">{selectedGame.description}</p>
        <h2 className="selected-game__title">Screenshots</h2>
        <div className="selected-game__divider"></div>
        <div className="selected-game__screenshots-container">
          {selectedGameScreenshots.map((screenshot) => {
            return (
              <img
                className="selected-game__screenshot"
                src={screenshot.image}
              />
            );
          })}
        </div>
        <div className="selected-game__divider-right"></div>
      </section>
    </>
  );
}

export default GamePage;
