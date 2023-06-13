import "../Header/Header.scss";
import logo from "../../assets/images/logo/logo-white.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header__navigation">
        <Link className="header__link" to="/library">
          <li className="header__container">Library</li>
        </Link>
        <Link className="header__link" to="/favourite">
          <li className="header__container">Favourites</li>
        </Link>
        <li className="header__container">About Us</li>
      </ul>

      <div className="header__search">
        <form className="header__search-form">
          <input
            type="search"
            name="search"
            className="header__search-input"
            placeholder="Search..."
          ></input>
        </form>
      </div>

      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} />
      </Link>
    </div>
  );
}

export default Header;
