import FormattedDate from "./FormattedDate"

function EventDetails({event}) {
  return (
    <div className="event-details">

      <div className="event-details-image">{event.image}</div>

      <div className="event-details-info">
        <h4 className="event-details-title">{event.title}</h4>

        <div className="event-details-date">
          <img src="/images/calendar-icon.svg" alt="" />
          <FormattedDate dateString={event.eventDate} />
        </div>

        <div className="event-details-location">
          <img src="/images/location-icon.svg" alt="" />
          <span>{event.location}</span>
        </div>

        <div className="horizontal-divider"></div>

        <h5 className="event-details-about">About The Event</h5>
        <p className="event-details-description">{event.description}</p>
      </div>
    </div>
  )
}

export default EventDetails