import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EventDetails from "../components/EventDetails"
import EventPartners from "../components/EventPartners"
import authFetch from "../utils/authFetch"

function EventBookingPage() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [event, setEvent] = useState([])
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1
  })

  const getEvent = async () => {
    try {
      const res = await authFetch(`https://verklig-ventixe-eventservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event.")
      
      const response = await res.json()
      setEvent(response.result)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await authFetch(`https://verklig-ventixe-bookingservice-c7dxaafbfde0g0dx.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        console.error("Booking failed.")
      } else {
        console.error("Booking was successful.")
        alert("Booking was made successfully!")
        navigate("/events")
      }
    } catch (err) {
      console.error("Error submitting booking:", err)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <div className="event-details-container">
      <div className="event-packages">
        <h4 className="event-packages-title">Book Event</h4>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="streetName">Street Name</label>
            <input type="text" name="streetName" placeholder="Enter your street name" value={formData.streetName} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" name="postalCode" placeholder="Enter your postal code" value={formData.postalCode} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="ticketQuantity">Ticket Quantity</label>
            <input type="number" name="ticketQuantity" placeholder="Enter quantity of tickets" value={formData.ticketQuantity} onChange={handleChange} required />
          </div>
          <button className="btn btn-primary" type="submit">Book Now</button>
        </form>
      </div>

      <EventDetails event={event} />

      <EventPartners />
    </div>
  )
}

export default EventBookingPage