import "../Card/Card.scss";

function Card({ name, image, id, open }) {
  return (
    <>
      <div className="game-card" key={id}>
        <img className="game-card__image" src={image} />
        <h1 className="game-card__title">{name}</h1>
      </div>
    </>
  );
}

export default Card;
