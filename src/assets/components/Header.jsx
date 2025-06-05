import { useLocation, useNavigate } from "react-router-dom"

function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isGuid = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i.test(pathname)
  const formattedPathName = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
  const isEventDetails = pathname.startsWith('/events/') && isGuid
  const showBackArrow = isEventDetails

  return (
    <header>
      {showBackArrow && (
        <button onClick={() => navigate(-1)} className="back-arrow-link">
          <i className="fa-regular fa-arrow-left"></i>
        </button>
      )}
      <h4 className="title">{isEventDetails ? "Event Details" : formattedPathName}</h4>
    </header>
  )
}

export default Header