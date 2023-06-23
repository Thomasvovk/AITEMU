import "../Card/Card.scss";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-plat-list-white.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";

function Card({ name, image, id, metacritic, open }) {
  return (
    <>
      <div className="game-card" key={id}>
        <img className="game-card__image" src={image} />
        <h1 className="game-card__title">{name}</h1>
        <p className="game-card__metacritic">{metacritic}</p>
      </div>
    </>
  );
}

export default Card;
