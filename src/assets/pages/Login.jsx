import PasswordInput from "../components/PasswordInput"

function Login() {
  return (
    <div className="surface">
      <h1 className="title flex">Login</h1>

      <form className="grid" method="post" noValidate>

        <div className="grid">
          <label className="input-label">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <PasswordInput />

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
  )
}

export default Login