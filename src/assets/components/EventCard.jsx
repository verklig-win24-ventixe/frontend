import { Link } from "react-router-dom"
import FormattedDate from "./FormattedDate"

function EventCard({event}) {
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
          <img src="images/location-icon.svg" alt="" />
          <span>{event.location}</span>
        </div>
        <div className="card-price">
          <span>50$</span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard