import "../Header/Header.scss";
import logo from "../../assets/images/logo/logo-white.png";
import profile from "../../assets/images/icons/profile-icon-white.png";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {
  return (
    <div className="header">
      <ul className="header__navigation">
        <Link className="header__link" to="/library">
          <li className="header__container">Library</li>
        </Link>
        <Link className="header__link" to="/new-releases">
          <li className="header__container">New Releases</li>
        </Link>
        <Link className="header__link" to="/about-us">
          <li className="header__container">About Us</li>
        </Link>
      </ul>
      <Search />
      <Link to="/my-profile">
        <img src={profile} className="header__profile" alt="profile icon" />
      </Link>

      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} />
      </Link>
    </div>
  );
}

export default Header;
