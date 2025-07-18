function auth({
  email,
  setEmail,
  password,
  setPassword,
  handleAuthentication,
}) {
  const data = [email, setEmail, password, setPassword];

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <img className="login-logo" src="/snapserve_logo.jpg" alt="logo" />
          <div className="login-inputs">
            <label htmlFor="txt-email" className="lbl-email">
              Email address
            </label>
            <input
              type="text"
              id="txt-email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="txt-password" className="lbl-password">
              Password
            </label>
            <div className="password-container">
              <input
                type="text"
                id="txt-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
