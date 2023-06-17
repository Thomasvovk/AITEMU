import "../GamePage/GamePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-do-black.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";
// import ReactPlayer from "react-player";

function GamePage() {
  const param = useParams();
  const id = param.id;

  const [selectedGame, setSelectedGame] = useState({});
  const [selectedGameScreenshots, setselectedGameScreenshots] = useState([]);
  //   const [selectedGameTrailer, setselectedGameTrailer] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?&key=35a4c87e8d814732916ac9e38857a151`
      )
      .then((response) => {
        setSelectedGame(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}/screenshots?&key=35a4c87e8d814732916ac9e38857a151`
      )
      .then((response) => {
        setselectedGameScreenshots(response.data.results);
      });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.rawg.io/api/games/${id}/movies?&key=35a4c87e8d814732916ac9e38857a151`
  //       )
  //       .then((response) => {
  //         setselectedGameTrailer(response.data.results[1].data["480"]);
  //         // console.log(response.data.results[0].data);
  //       });
  //   }, []);

  //   console.log(selectedGameTrailer);

  //   if (!setselectedGameTrailer.length) {
  //     return <p>Loading...</p>;
  //   }

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
          <p className="selected-game__short-meta">Metacritic</p>
          <p className="selected-game__short-metacritic">
            {selectedGame.metacritic}
          </p>
          <div className="selected-game__icons-container">
            <img
              className="selected-game__icon-favourite"
              src={favouriteIcon}
            />
            <img
              className="selected-game__icon-completed"
              src={completedIcon}
            />
            <img
              className="selected-game__icon-progress"
              src={inprogressIcon}
            />
            <img className="selected-game__icon-toplay" src={toplayIcon} />
          </div>
        </div>

        {/* <ReactPlayer url={selectedGameTrailer} controls={true} /> */}

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
