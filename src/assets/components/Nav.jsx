import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <div className="logotype">
        <img src="images/ventixe-logotype.svg" alt="Logotype" />
        <span>Ventixe</span>
      </div>

      <div className="nav-list">
        <NavLink to="/events" className="nav-item">
          <img src="images/ticket-icon.svg" alt="Events Icon" />
          <span>Events</span>
        </NavLink>
      </div>

      <button className="btn btn-secondary"><img src="images/signout-icon.svg" alt="" />Sign Out</button>
    </nav>
  )
}

export default Nav