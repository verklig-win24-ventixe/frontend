import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function RegisterPage() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTOS, setAcceptTOS] = useState(false)

  const [passwordVisible, setPasswordvisible] = useState(false)
  const [comfirmPasswordvisible, setComfirmPasswordvisible] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    const res = await fetch("https://verklig-ventixe-authservice-c3aza8fbe7gqh8e4.swedencentral-01.azurewebsites.net/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        password,
        confirmPassword,
        tos: acceptTOS,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      alert("Registration was successful, please check your email to verify your account.")
      navigate("/login")
    } else {
      alert(data.message || "Registration failed.")
    }
  }

  return (
    <div className="surface">
      <h1 className="title flex">Register</h1>

      <form className="grid" onSubmit={handleRegister} noValidate>

        <div className="grid">
          <label className="input-label">Full Name</label>
          <input type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>

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

        <label className="input-label">Confirm Password</label>
        <div className="password-input">
          <input type={comfirmPasswordvisible ? "text" : "password"} placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="button" className="btn flex" onClick={() => setComfirmPasswordvisible(v => !v)}>
            <i className={`fa-duotone fa-solid fa-eye flex show-icon ${comfirmPasswordvisible ? '' : 'hidden'}`}></i>
            <i className={`fa-duotone fa-solid fa-eye-low-vision flex hide-icon ${comfirmPasswordvisible ? 'hidden' : ''}`}></i>
          </button>
        </div>

        <div className="terms-and-conditions flex">
          <label className="flex">
            <input type="checkbox" value={acceptTOS} onChange={(e) => setAcceptTOS(e.target.checked)} />
            <i className="fa-solid fa-check checkmark"></i>
            <span>I accept the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Terms and Conditions</a></span>
          </label>
        </div>

        <button className="btn btn-primary" type="submit">Create Account</button>

        <div className="sign-up flex">
          <label>Already have an account?</label>
          <Link to={"/login"}>Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage