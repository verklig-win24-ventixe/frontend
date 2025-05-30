import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EventCard from "../components/EventCard"

function EventsPage() {
  const {id} = useParams()
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const res = await fetch(`https://verklig-ventixe-eventservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/events`)
      if (!res.ok) throw new Error("Failed to fetch event.")
      
      const response = await res.json()
      setEvents(response.result)
    } catch (err) {
      console.error(err)
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

export default EventsPage