import { useState } from "react"

function PasswordInput() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <label className="input-label">Password</label>
      <div className="password-input">
        <input type={visible ? "text" : "password"} placeholder="Enter your password" />
        <button type="button" className="btn flex" onClick={() => setVisible(v => !v)}>
          <i className={`fa-duotone fa-solid fa-eye flex show-icon ${visible ? '' : 'hidden'}`}></i>
          <i className={`fa-duotone fa-solid fa-eye-low-vision flex hide-icon ${visible ? 'hidden' : ''}`}></i>
        </button>
      </div>
    </>
  )
}

export default PasswordInput