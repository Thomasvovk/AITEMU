import "../GamePage/GamePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-do-black.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";
import parse from "html-react-parser";
import { apiUrlGames, apiKey } from "../Utilities/API";
import ReactPlayer from "react-player";

function GamePage() {
  const param = useParams();
  const id = param.id;

  const [selectedGame, setSelectedGame] = useState({});
  const [selectedGameScreenshots, setselectedGameScreenshots] = useState([]);
  const [selectedGameTrailer, setselectedGameTrailer] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrlGames}/${id}?&key=${apiKey}`).then((response) => {
      const item = response.data;
      const [api, imagePath] = item.background_image.split("media/");
      item.image = `${api}media/resize/640/-/${imagePath}`;
      setSelectedGame(item);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrlGames}/${id}/screenshots?&key=${apiKey}`)
      .then((response) => {
        const list = response.data.results.map((item) => {
          const [api, imagePath] = item.image.split("media/");
          item.image = `${api}media/resize/640/-/${imagePath}`;
          return item;
        });
        setselectedGameScreenshots(list);
      });
  }, []);

  return (
    <>
      <h1 className="selected-game">{selectedGame.name}</h1>
      <section className="selected-game__container">
        <div className="selected-game__image-container">
          <img
            className="selected-game__background-image"
            src={selectedGame.background_image}
            alt="background game image"
          />
          <p className="selected-game__short-website">Release Date</p>
          <p className="selected-game__short-release">
            {selectedGame.released}
          </p>
          <p className="selected-game__short-meta">Metacritic</p>
          <p className="selected-game__short-metacritic">
            {selectedGame.metacritic}
          </p>
          <div className="selected-game__icons-container">
            <img
              className="selected-game__icon-favourite"
              src={favouriteIcon}
              alt="background game image"
            />
            <img
              className="selected-game__icon-completed"
              src={completedIcon}
            />
            <img
              className="selected-game__icon-progress"
              src={inprogressIcon}
              alt="background game image"
            />
            <img className="selected-game__icon-toplay" src={toplayIcon} />
          </div>
        </div>

        <ReactPlayer url={selectedGameTrailer} controls={true} />

        <h2 className="selected-game__title">Description</h2>
        {selectedGame.description && (
          <p className="selected-game__description">
            {parse(selectedGame.description)}
          </p>
        )}
        <h2 className="selected-game__title">Screenshots</h2>
        <div className="selected-game__divider"></div>
        <div className="selected-game__screenshots-container">
          {selectedGameScreenshots.map((screenshot) => {
            return (
              <img
                className="selected-game__screenshot"
                src={screenshot.image}
                alt="screenshot game image"
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
