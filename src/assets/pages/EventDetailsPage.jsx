import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EventPartners from "../components/EventPartners"
import EventPackages from "../components/EventPackages"
import EventDetails from "../components/EventDetails"

function EventDetailsPage() {
  const {id} = useParams()
  const [event, setEvent] = useState([])

  const getEvent = async () => {
    try {
      const res = await fetch(`https://verklig-ventixe-eventservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event.")
      
      const response = await res.json()
      setEvent(response.result)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <div className="event-details-container">
      <EventDetails event={event} />

      <EventPackages />

      <EventPartners />
    </div>
  )
}

export default EventDetailsPage