import "../LoginPage/LoginPage.scss";

function LoginPage() {
  return (
    <>
      <div className="log-in">
        <div className="log-in__image"></div>
        <div>
          <h1 className="log-in__title">Welcome to AITEMU </h1>
          <h2 className="log-in__subheader">Sign In to Continue</h2>
          <p className="log-in__description">
            Don't have an account? Create a account It takes less than a minute.
          </p>
          <form action="" method="get">
            <div>
              <label for="name">Email </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label for="email">Password </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <input type="submit" value="Sign in" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
