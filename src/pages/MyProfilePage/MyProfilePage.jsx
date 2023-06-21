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
  const { currentUser } = useAuth();
  const [fav, setFav] = useState([]);

  useEffect(() => {
    if (currentUser) {
      listFavourites(currentUser.uid).then((res) => {
        const favList = res.docs.map((doc) => doc.data());
        setFav(favList);
      });
    }
  }, [currentUser]);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <h1 className="profile">My Profile</h1>
      <section className="profile">
        <div className="profile__buttons">
          <button className="profile__button">Favourite Games</button>
          <button className="profile__button">Completed</button>
          <button className="profile__button">In Progress</button>
          <button className="profile__button">To Play</button>
        </div>
      </section>
      <div className="profile__games">
        {Array.isArray(fav) &&
          fav.length > 0 &&
          fav.map((item) => {
            return (
              <Link to={`/game/${item.id}`}>
                <Card
                  key={item.id}
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
