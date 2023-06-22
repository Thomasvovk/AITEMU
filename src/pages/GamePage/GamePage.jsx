import "../GamePage/GamePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-plat-list-white.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";
import parse from "html-react-parser";
import { apiUrlGames, apiKey, apitGameAdditions } from "../Utilities/API";
import ReactPlayer from "react-player";
import Card from "../../components/Card/Card";
import { useDb } from "../../contexts/DbContext";
import { useAuth } from "../../contexts/AuthContext";

function GamePage() {
  const { addToFavourites: dbAddToFavourites } = useDb();
  const { addToCompleted: dbAddToCompleted } = useDb();
  const { addToProgress: dbAddToProgress } = useDb();
  const { addToPlayNext: dbAddToPlayNext } = useDb();
  const { currentUser } = useAuth();
  const param = useParams();
  const id = param.id;

  const [selectedGame, setSelectedGame] = useState({});
  const [selectedGameScreenshots, setselectedGameScreenshots] = useState([]);
  const [selectedGameAdditions, setselectedGameAdditions] = useState([]);
  // const [selectedGameTrailer, setselectedGameTrailer] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrlGames}/${id}?&key=${apiKey}`).then((response) => {
      const item = response.data;
      if (item.background_image) {
        const [api, imagePath] = item.background_image.split("media/");
        item.image = `${api}media/resize/640/-/${imagePath}`;
      }

      setSelectedGame(item);
    });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${apiUrlGames}/${id}/screenshots?&key=${apiKey}`)
      .then((response) => {
        const list = response.data.results.map((item) => {
          if (item.image) {
            const [api, imagePath] = item.image.split("media/");
            item.image = `${api}media/resize/640/-/${imagePath}`;
          }
          return item;
        });
        setselectedGameScreenshots(list);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${apiUrlGames}/${id}/additions?&key=${apiKey}`)
      .then((response) => {
        const item = response.data.results;
        if (item.background_image) {
          const [api, imagePath] = item.background_image.split("media/");
          item.background_image = `${api}media/resize/640/-/${imagePath}`;
        }
        setselectedGameAdditions(item);
      });
  }, [id]);

  function addToFavourites() {
    dbAddToFavourites(id, currentUser.uid, selectedGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addToCompleted() {
    dbAddToCompleted(id, currentUser.uid, selectedGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addToProgress() {
    dbAddToProgress(id, currentUser.uid, selectedGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addToPlayNext() {
    dbAddToPlayNext(id, currentUser.uid, selectedGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (selectedGameScreenshots === null) {
    return <span className="loader"></span>;
  }

  if (selectedGame === null) {
    return <span className="loader"></span>;
  }

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
            <div className="selected-game__icons-box">
              <img
                className="selected-game__icon-favourite"
                src={favouriteIcon}
                onClick={() => addToFavourites(selectedGame)}
                alt="background game image"
              />
              <img
                className="selected-game__icon-completed"
                onClick={() => addToCompleted(selectedGame)}
                src={completedIcon}
              />
              <img
                className="selected-game__icon-progress"
                onClick={() => addToProgress(selectedGame)}
                src={inprogressIcon}
                alt="background game image"
              />
              <img
                className="selected-game__icon-toplay"
                onClick={() => addToPlayNext(selectedGame)}
                src={toplayIcon}
              />
            </div>
          </div>
        </div>
        {/* <div className="selected-game__trailer-container">
          <ReactPlayer
            className="selected-game__trailer"
            url={selectedGameTrailer}
            controls={true}
          />
        </div> */}

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

        <h2 className="selected-game__title">DLC</h2>
        <div className="selected-game__divider"></div>
        <div className="selected-game__additions-container">
          {selectedGameAdditions.map((item) => {
            return (
              <Link to={`/game/${item.id}`}>
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.background_image}
                  id={item.id}
                />
              </Link>
            );
          })}
        </div>
      </section>

      <div className="selected-game__divider-right"></div>
    </>
  );
}

export default GamePage;
