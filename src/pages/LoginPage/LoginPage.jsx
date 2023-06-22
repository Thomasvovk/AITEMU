import "../LoginPage/LoginPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function setFormValue(inputName, event) {
    const value = event.target.value;
    setForm((prevState) => ({ ...prevState, [inputName]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = form;

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    }

    setLoading(false);
  }

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
          <form onSubmit={handleSubmit} action="" method="get">
            <div className="log-in__auth-container">
              <label className="log-in__container-title" htmlFor="email">
                Email{" "}
              </label>
              <input
                className="log-in__container-input"
                type="email"
                name="email"
                placeholder="Please enter your email"
                id="email"
                required
                onChange={(e) => setFormValue("email", e)}
              />
            </div>
            <div className="log-in__auth-container">
              <label className="log-in__container-title" htmlFor="password">
                Password{" "}
              </label>
              <input
                className="log-in__container-input"
                type="password"
                name="password"
                placeholder="Please enter your password"
                id="password"
                required
                onChange={(e) => setFormValue("password", e)}
              />
            </div>
            <Link className="log-in__forgot-link" to="#">
              <p className="log-in__forgot-password">Forgot Password?</p>
            </Link>
            <div className="log-in__button-container">
              <button
                className="log-in__button"
                type="submit"
                disabled={loading}
              >
                Sign in
              </button>
            </div>
          </form>
          <Link to="/sign-up">
            <div className="log-in__signup-container">
              <input
                className="log-in__signup-button"
                type="submit"
                value="Sign up"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
