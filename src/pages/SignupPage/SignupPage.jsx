import "../SignupPage/SignupPage.scss";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect, useState } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup, currentUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  function setFormValue(inputName, event) {
    const value = event.target.value;

    setForm((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    const { email, password } = form;

    signup(email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  }

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

          <form onSubmit={handlesubmit} action="" method="get">
            <div className="sign-up__auth-container">
              <label className="sign-up__container-title" for="email">
                Email{" "}
              </label>
              <input
                className="sign-up__container-input"
                type="email"
                name="email"
                placeholder="Please enter your email"
                id="email"
                onInput={(e) => setFormValue("email", e)}
                required
              />
            </div>
            <div className="sign-up__auth-container">
              <label className="sign-up__container-title" for="password">
                Password{" "}
              </label>
              <input
                className="sign-up__container-input"
                type="password"
                name="password"
                placeholder="Please enter your password"
                id="password"
                onInput={(e) => setFormValue("password", e)}
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
