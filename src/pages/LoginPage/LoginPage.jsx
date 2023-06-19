import "../LoginPage/LoginPage.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="log-in">
        <div className="log-in__image"></div>
        <div className="log-in__credentials-contaiter">
          <h1 className="log-in__title">Welcome to AITEMU </h1>
          <h2 className="log-in__subheader">Sign In to Continue</h2>
          <p className="log-in__description">
            Not part of our gaming community yet? Forge your path by creating an
            account. The process is quick, taking less than a minute. Get ready
            to unlock a world of gaming possibilities!
          </p>
          <form action="" method="get">
            <div className="log-in__auth-container">
              <label className="log-in__container-title" for="name">
                Email{" "}
              </label>
              <input
                className="log-in__container-input"
                type="text"
                name="name"
                placeholder="Please enter your email"
                id="name"
                required
              />
            </div>
            <div className="log-in__auth-container">
              <label className="log-in__container-title" for="email">
                Password{" "}
              </label>
              <input
                className="log-in__container-input"
                type="email"
                name="email"
                placeholder="Please enter your password"
                id="email"
                required
              />
            </div>
            <Link className="log-in__forgot-link" to="#">
              <p className="log-in__forgot-password">Forgot Password?</p>
            </Link>
            <div className="log-in__button-container">
              <input className="log-in__button" type="submit" value="Sign in" />
            </div>

            <Link to="/sign-up">
              <div className="log-in__signup-container">
                <input
                  className="log-in__signup-button"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
