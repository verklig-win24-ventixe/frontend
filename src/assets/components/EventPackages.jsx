import { Link } from "react-router-dom"

function EventPackages({ event }) {
  return (
    <div className="event-packages">
      <h4 className="event-packages-title">Packages</h4>

      <div className="event-packages-list">
      {
        event.packages?.map(e => (
          <Link key={e.id} to={`/events/booking/${event.id}`}>
            <div className="event-packages-list-item">
              <div className="event-packages-list-item-container">
                <h6 className="event-packages-list-item-title">{e.title}</h6>
                <div className="event-packages-list-info">
                  <div className="event-packages-list-info-item">
                    <img src="/images/circle-checkmark-icon.svg" alt="" />
                    <span>{e.seatingArrangement}</span>
                  </div>
                  <div className="event-packages-list-info-item">
                    <img src="/images/circle-checkmark-icon.svg" alt="" />
                    <span>{e.placement}</span>
                  </div>
                </div>
              </div>
              <div className="event-packages-list-price">{e.currency}{e.price}</div>
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default EventPackages