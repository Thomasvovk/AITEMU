import "../MyProfilePage/MyProfilePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiAllGamesMetacritics } from "../Utilities/API";
import Card from "../../components/Card/Card";
import { useDb } from "../../contexts/DbContext";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function MyProfilePage() {
  const { listFavourites } = useDb();
  const { listCompleted } = useDb();
  const { listProgress } = useDb();
  const { listPlayNext } = useDb();
  const { currentUser } = useAuth();
  const [completedList, setCompletedList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [playNextList, setPlayNextList] = useState([]);
  const [fav, setFav] = useState([]);
  const [activeButton, setActiveButton] = useState("Favourite Games");

  useEffect(() => {
    if (currentUser) {
      listFavourites(currentUser.uid).then((res) => {
        const favList = res.docs.map((doc) => doc.data());
        setFav(favList);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      listCompleted(currentUser.uid).then((res) => {
        const completedList = res.docs.map((doc) => doc.data());
        setCompletedList(completedList);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      listProgress(currentUser.uid).then((res) => {
        const progressList = res.docs.map((doc) => doc.data());
        setProgressList(progressList);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      listPlayNext(currentUser.uid).then((res) => {
        const playNextList = res.docs.map((doc) => doc.data());
        setPlayNextList(playNextList);
      });
    }
  }, [currentUser]);

  function openGame(id) {
    console.log(id);
  }

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName); // Set the active button
  }

  // Filter the games based on the active button
  let gamesToDisplay = [];
  switch (activeButton) {
    case "Favourite Games":
      gamesToDisplay = fav;
      break;
    case "Completed":
      gamesToDisplay = completedList;
      break;
    case "In Progress":
      gamesToDisplay = progressList;
      break;
    case "To Play":
      gamesToDisplay = playNextList;
      break;
    default:
      gamesToDisplay = fav;
      break;
  }

  return (
    <>
      <h1 className="profile">My Profile</h1>
      <section className="profile">
        <div className="profile__buttons">
          <button
            className={`profile__button ${
              activeButton === "Favourite Games" && "active"
            }`}
            onClick={() => handleButtonClick("Favourite Games")}
          >
            Favourite Games
          </button>
          <button
            className={`profile__button ${
              activeButton === "Completed" && "active"
            }`}
            onClick={() => handleButtonClick("Completed")}
          >
            Completed
          </button>
          <button
            className={`profile__button ${
              activeButton === "In Progress" && "active"
            }`}
            onClick={() => handleButtonClick("In Progress")}
          >
            In Progress
          </button>
          <button
            className={`profile__button ${
              activeButton === "To Play" && "active"
            }`}
            onClick={() => handleButtonClick("To Play")}
          >
            To Play
          </button>
        </div>
      </section>
      <div className="profile__games">
        {Array.isArray(gamesToDisplay) &&
          gamesToDisplay.length > 0 &&
          gamesToDisplay.map((item) => {
            return (
              <Link to={`/game/${item.id}`} key={item.id}>
                <Card
                  id={item.id}
                  image={item.background_image}
                  name={item.name}
                />
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default MyProfilePage;
