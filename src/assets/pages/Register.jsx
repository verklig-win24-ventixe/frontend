function Register() {
  return (
    <div className="center-screen">
      <div className="surface">

        <h1 className="title flex">Register</h1>

        <form className="grid" method="post" novalidate>

          <div className="grid">
            <label className="input-label">Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

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

          <label className="input-label">Confirm password</label>
          <div className="password-input">
            <input type="password" placeholder="Confirm your password" />
            <button type="button" className="btn flex" onclick="togglePassword(this)">
              <i className="fa-duotone fa-solid fa-eye flex show-icon hidden"></i>
              <i className="fa-duotone fa-solid fa-eye-low-vision flex hide-icon"></i>
            </button>
          </div>

          <div className="terms-and-conditions flex">
            <label className="flex">
              <input type="checkbox" />
              <i className="fa-solid fa-check checkmark"></i>
              <span>I accept the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Terms and Conditions</a></span>
            </label>
          </div>

          <button className="btn btn-primary" type="submit">Create Account</button>

          <div className="sign-up flex">
            <label>Already have an account?</label>
            <a href="#">Sign In</a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register