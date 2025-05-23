import { useState } from "react"
import EventCard from "../components/EventCard"

function Events() {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("")

    if (res.ok) {
      const data = await res.json()
      setEvents(data)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <main>
      <div className="event-container">
        {
          events.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        }
      </div>
    </main>
  )
}

export default Events