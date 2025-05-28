import { useEffect, useState } from "react"
import EventCard from "../components/EventCard"

function Events() {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://verklig-ventixe-eventservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/events")

    if (res.ok) {
      const response = await res.json()
      setEvents(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className="event-container">
      {
        events.map(event => (
          <EventCard key={event.id} event={event} />
        ))
      }
    </div>
  )
}

export default Events