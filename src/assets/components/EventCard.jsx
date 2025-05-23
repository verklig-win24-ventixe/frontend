function EventCard({event}) {
  return (
    <div class="event-card">
      <div class="card-image">{event.image}</div>
      <div class="card-date">
        <span>{event.date}</span>
      </div>
      <div class="card-title">
        <span>{event.title}</span>
      </div>
      <div class="card-destination">
        <img src="images/destination-icon.svg" alt="" />
        <span>{event.destination}</span>
      </div>
      <div class="card-price">
        <span>{event.price}</span>
      </div>
    </div>
  )
}

export default EventCard