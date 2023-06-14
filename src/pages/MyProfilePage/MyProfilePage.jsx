import "../MyProfilePage/MyProfilePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiAllGamesMetacritics } from "../utilities/API";
import Card from "../../components/Card/Card";

function MyProfilePage() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    axios.get(apiAllGamesMetacritics).then((response) => {
      setAllGames(response.data.results);
    });
  }, []);

  function openGame(id) {
    console.log(id);
  }
  return (
    <>
      <h1 className="favourites">My Profile</h1>
      <section className="favourites__section">
        <div className="favourites__buttons">
          <button className="favourites__button">Favourite Games</button>
          <button className="favourites__button">Completed</button>
          <button className="favourites__button">In Progress</button>
          <button className="favourites__button">To Play</button>
        </div>
      </section>
      <div className="favourites__games">
        {allGames.map((item) => {
          return (
            <Card
              name={item.name}
              image={item.background_image}
              id={item.id}
              open={openGame}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyProfilePage;
