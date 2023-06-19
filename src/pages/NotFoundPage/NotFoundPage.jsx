import "../NotFoundPage/NotFoundPage.scss";

function NotFound() {
  return (
    <>
      <div>
        <h1 className="not-found__title">Oops! Page is not found!</h1>

        <div className="not-found__character-container">
          <div className="not-found__character-right"></div>
          <p className="not-found__character-subheader">
            Hmmm! It seems the page you're seeking has vanished from our gaming
            universe. Our brave developers are working hard to restore it. In
            the meantime, embark on another epic quest and seek support if
            needed. Enjoy the realms of endless gaming adventures!
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
