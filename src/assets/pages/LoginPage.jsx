import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [persistence, setPersistence] = useState(false)
  const [passwordVisible, setPasswordvisible] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await fetch("https://verklig-ventixe-authservice-c3aza8fbe7gqh8e4.swedencentral-01.azurewebsites.net/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        isPersistent: persistence,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem("token", data.token)
      navigate("/events")
    } else {
      alert(data.message || "Login failed.")
    }
  }

  return (
    <div className="surface">
      <h1 className="title flex">Login</h1>

      <form className="grid" onSubmit={handleLogin} noValidate>

        <div className="grid">
          <label className="input-label">Email</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <label className="input-label">Password</label>
        <div className="password-input">
          <input type={passwordVisible ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="btn flex" onClick={() => setPasswordvisible(v => !v)}>
            <i className={`fa-duotone fa-solid fa-eye flex show-icon ${passwordVisible ? '' : 'hidden'}`}></i>
            <i className={`fa-duotone fa-solid fa-eye-low-vision flex hide-icon ${passwordVisible ? 'hidden' : ''}`}></i>
          </button>
        </div>

        <div className="remember-password flex">
          <div className="flex">
            <label className="flex">
              <input type="checkbox" checked={persistence} onChange={(e) => setPersistence(e.target.checked)} />
              <i className="fa-solid fa-check checkmark"></i>
              <span>Remember Me</span>
            </label>
          </div>
          <a href="#">Forgot your Password?</a>
        </div>

        <button className="btn btn-primary" type="submit">Log in</button>

        <div className="sign-up flex">
          <label>Don't have an account?</label>
          <Link to={"/register"}>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage