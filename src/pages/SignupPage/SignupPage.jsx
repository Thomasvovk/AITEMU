import "../SignupPage/SignupPage.scss";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <div className="sign-up">
        <div className="sign-up__image"></div>
        <div className="sign-up__credentials-contaiter">
          <h1 className="sign-up__title">Welcome to AITEMU </h1>
          <h2 className="sign-up__subheader">Sign Up to Continue</h2>
          <p className="sign-up__description">
            Not a gamer yet? Level up by creating an account. It only takes a
            minute, and you'll be ready to embark on your gaming adventure.
          </p>
          <form action="" method="get">
            <div className="sign-up__auth-container">
              <label className="sign-up__container-title" for="name">
                Your Profile Name{" "}
              </label>
              <input
                className="sign-up__container-input sign-up__profile-name"
                type="text"
                name="name"
                placeholder="Please enter your profile name"
                id="name"
                required
              />
              <label className="sign-up__container-title" for="name">
                Email{" "}
              </label>
              <input
                className="sign-up__container-input"
                type="text"
                name="name"
                placeholder="Please enter your email"
                id="name"
                required
              />

              <label className="sign-up__container-title" for="name">
                Confirm your email{" "}
              </label>
              <input
                className="sign-up__container-input"
                type="text"
                name="name"
                placeholder="Please enter your email"
                id="name"
                required
              />
            </div>
            <div className="sign-up__auth-container">
              <label className="sign-up__container-title" for="email">
                Password{" "}
              </label>
              <input
                className="sign-up__container-input"
                type="email"
                name="email"
                placeholder="Please enter your password"
                id="email"
                required
              />
            </div>
            <Link className="sign-up__forgot-link" to="/login">
              <p className="sign-up__forgot-password">Already a user?</p>
            </Link>
            <div className="sign-up__button-container">
              <input
                className="sign-up__button"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
