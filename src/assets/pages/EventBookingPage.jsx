import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EventBookingPage() {
  const {id} = useParams()
  const [event, setEvent] = useState([])
  const [formData, setFormData] = useState({ eventId: id, firstName: '', lastName: '', email: '', streetName: '', postalCode: '', city: ''})

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://verklig-ventixe-bookingservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        console.error("Booking failed.")
      } else {
        console.error("Booking was successful.")
      }
    } catch (err) {
      console.error("Error submitting booking:", err)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <div>
      <h5>Book Event - {event.title}</h5>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="streetName">Street Name</label>
            <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default EventBookingPage