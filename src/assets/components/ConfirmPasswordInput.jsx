import { useState } from "react"

function ConfirmPasswordInput() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <label className="input-label">Confirm Password</label>
      <div className="password-input">
        <input type={visible ? "text" : "password"} placeholder="Confirm your password" />
        <button type="button" className="btn flex" onClick={() => setVisible(v => !v)}>
          <i className={`fa-duotone fa-solid fa-eye flex show-icon ${visible ? '' : 'hidden'}`}></i>
          <i className={`fa-duotone fa-solid fa-eye-low-vision flex hide-icon ${visible ? 'hidden' : ''}`}></i>
        </button>
      </div>
    </>
  )
}

export default ConfirmPasswordInput