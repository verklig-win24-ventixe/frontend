import { Link } from "react-router-dom"
import FormattedDate from "./FormattedDate"

function EventCard({ event }) {
  const getLowestPrice = () => {
    if (!event.packages || event.packages.length === 0) return null

    const cheapest = event.packages.reduce((min, pkg) =>
      pkg.price !== null && pkg.price < min.price ? pkg : min
    )

    return `${cheapest.price}${cheapest.currency ?? ""}`
  }

  const lowestPrice = getLowestPrice()

  return (
    <Link to={`/events/${event.id}`}>
      <div className="event-card">
        <div className="card-image">{event.image}</div>
        <div className="card-date">
          <FormattedDate dateString={event.eventDate} />
        </div>
        <div className="card-title">
          <span>{event.title}</span>
        </div>
        <div className="card-location">
          <img src="/images/location-icon.svg" alt="" />
          <span>{event.location}</span>
        </div>
        <div className="card-price">
          {lowestPrice ? ( <span>{lowestPrice}</span> ) : ( <span>Not available</span> )}
        </div>
      </div>
    </Link>
  )
}

export default EventCard