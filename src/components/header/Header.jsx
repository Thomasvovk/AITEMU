import "../Header/Header.scss";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header__navigation">
        <Link className="header__link" to="/library">
          <li className="header__container">Library</li>
        </Link>
        <li className="header__container">Favourites</li>
        <li className="header__container">About Us</li>
      </ul>

      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} />
      </Link>
    </div>
  );
}

export default Header;
