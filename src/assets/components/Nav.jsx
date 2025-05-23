function Nav() {
  return (
    <nav>
      <div class="logotype">
        <img src="images/ventixe-logotype.svg" alt="Logotype" />
        <span>Ventixe</span>
      </div>

      <div class="nav-list">
        <a href="#" class="nav-item">
          <img src="images/ticket-icon.svg" alt="Events Icon" />
          <span>Events</span>
        </a>
      </div>

      <button class="btn btn-secondary"><img src="images/signout-icon.svg" alt="" />Sign Out</button>
    </nav>
  )
}

export default Nav