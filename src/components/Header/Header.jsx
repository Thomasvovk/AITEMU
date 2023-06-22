import "../Header/Header.scss";
import logo from "../../assets/images/logo/logo-white.png";
import profile from "../../assets/images/icons/profile-icon-white.png";
import { Link } from "react-router-dom";
import SearchBar from "../Search/Search";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      alert("Successfully signed out!");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }

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

      <SearchBar />

      <div className="dropdown">
        <button className="dropbtn">
          <img src={profile} alt="profile icon" className="header__profile" />
        </button>

        <div className="dropdown-content">
          {currentUser ? (
            <>
              <Link to="/my-profile">My Dashboard</Link>
              <a href="#">My Preferences</a>
              <a href="#" onClick={handleLogout}>
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
      </div>

      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
