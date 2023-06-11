import "../Card/Card.scss";

function Card({ name, image, id, open }) {
  return (
    <>
      <section className="game">
        <div className="game__card" key={id} onClick={() => open(id)}>
          <img className="game__image" src={image} />
          <h1 className="game__title">{name}</h1>
        </div>
      </section>
    </>
  );
}

export default Card;
