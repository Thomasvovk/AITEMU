import "../Header/Header.scss";
import logo from "../../assets/images/logo/logo-white.png";
// import { Link } from "react";

function Header() {
  return (
    <div className="header">
      <ul className="header__navigation">
        <li className="header__container">Library</li>
        <li className="header__container">Favourites</li>
        <li className="header__container">About Us</li>
      </ul>
      <img className="header__logo" src={logo} />
    </div>
  );
}

export default Header;
