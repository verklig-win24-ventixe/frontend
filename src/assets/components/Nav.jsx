import { NavLink, useLocation, useNavigate } from "react-router-dom"

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () =>
  {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav>
      <div className="logotype">
        <img src="/images/ventixe-logotype.svg" alt="Logotype" />
        <span>Ventixe</span>
      </div>

      <div className="nav-list">
        <NavLink to="/dashboard" className="nav-item">
          <div className={`active-border ${location.pathname.startsWith("/dashboard") ? "" : "hidden"}`}></div>
          <img src="/images/dashboard-icon.svg" alt="Dashboard Icon" className={`default ${location.pathname.startsWith("/dashboard") ? "hidden" : "active"}`} />
          <img src="/images/dashboard-icon-hover.svg" alt="Dashboard Icon" className={`hover ${location.pathname.startsWith("/dashboard") ? "active" : ""}`} />
          <span className={`${location.pathname.startsWith("/dashboard") ? "active" : ""}`}>Dashboard</span>
        </NavLink>
        <NavLink to="/events" className="nav-item">
          <div className={`active-border ${location.pathname.startsWith("/events") ? "" : "hidden"}`}></div>
          <img src="/images/ticket-icon.svg" alt="Events Icon" className={`default ${location.pathname.startsWith("/events") ? "hidden" : "active"}`} />
          <img src="/images/ticket-icon-hover.svg" alt="Events Icon" className={`hover ${location.pathname.startsWith("/events") ? "active" : ""}`} />
          <span className={`${location.pathname.startsWith("/events") ? "active" : ""}`}>Events</span>
        </NavLink>
      </div>

      <button className="btn btn-secondary" onClick={logout}><img src="/images/signout-icon.svg" alt="" />Sign Out</button>
    </nav>
  )
}

export default Nav