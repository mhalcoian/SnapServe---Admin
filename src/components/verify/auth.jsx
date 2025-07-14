function auth({ handleAuthentication }) {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <img className="login-logo" src="/snapserve_logo.jpg" alt="logo" />
          <div className="login-inputs">
            <label htmlFor="txt-email" className="lbl-email">
              Email address
            </label>
            <input type="text" id="txt-email" placeholder="example@mail.com" />

            <label htmlFor="txt-password" className="lbl-password">
              Password
            </label>
            <div className="password-container">
              <input type="text" id="txt-password" placeholder="Password" />
              <div className="show-pass-icon"></div>
            </div>
          </div>
          <button className="btn-login" onClick={() => handleAuthentication()}>
            LOG IN
          </button>
        </div>
      </div>
    </>
  );
}

export default auth;
