import "../Card/Card.scss";
import favouriteIcon from "../../assets/images/icons/heart-black.png";
import completedIcon from "../../assets/images/icons/completed-black2.png";
import toplayIcon from "../../assets/images/icons/to-plat-list-white.png";
import inprogressIcon from "../../assets/images/icons/icons8-in-progress-30.png";

function Card({ name, image, id, open }) {
  return (
    <>
      <div className="game-card" key={id}>
        <img className="game-card__image" src={image} />
        <h1 className="game-card__title">{name}</h1>
      </div>
      {/* <div className="game-card__icons-container">
        <div className="game-card__icons-box">
          <img
            className="game-card__icon-favourite"
            src={favouriteIcon}
            alt="background game image"
          />
          <img className="game-card__icon-completed" src={completedIcon} />
          <img
            className="game-card__icon-progress"
            src={inprogressIcon}
            alt="background game image"
          />
          <img className="game-card__icon-toplay" src={toplayIcon} />
        </div>
      </div> */}
    </>
  );
}

export default Card;
