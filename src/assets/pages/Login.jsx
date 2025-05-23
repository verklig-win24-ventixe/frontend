function Login() {
  return (
    <div className="center-screen">
      <div className="surface">
        <h1 className="title flex">Login</h1>

        <form className="grid" method="post" novalidate>

          <div className="grid">
            <label className="input-label">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <label className="input-label">Password</label>
          <div className="password-input">
            <input type="password" placeholder="Enter your password" />
            <button type="button" className="btn flex" onclick="togglePassword(this)">
              <i className="fa-duotone fa-solid fa-eye flex show-icon hidden"></i>
              <i className="fa-duotone fa-solid fa-eye-low-vision flex hide-icon"></i>
            </button>
          </div>

          <div className="remember-password flex">
            <div className="flex">
              <label className="flex">
                <input type="checkbox" />
                <i className="fa-solid fa-check checkmark"></i>
                <span>Remember Me</span>
              </label>
            </div>
            <a href="#">Forgot your Password?</a>
          </div>

          <button className="btn btn-primary" type="submit">Log in</button>

          <div className="sign-up flex">
            <label>Don't have an account?</label>
            <a href="#">Sign Up</a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login