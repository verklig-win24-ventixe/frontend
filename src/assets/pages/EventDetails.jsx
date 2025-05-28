import { useParams } from "react-router-dom"

function EventDetails() {
  const {id} = useParams()
  const [event, setEvent] = useState([])

  const getEvents = async () => {
    const res = await fetch(`https://verklig-ventixe-eventservice-apdffmbxdzb8epej.swedencentral-01.azurewebsites.net/api/events/${id}`)

    if (res.ok) {
      const response = await res.json()
      setEvent(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>{id}</div>
  )
}

export default EventDetails