import { Route, Routes } from 'react-router-dom'
import './css/site.css'
import Events from './assets/pages/Events'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import EventDetails from './assets/pages/EventDetails'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/events' element={<Events />} />
      <Route path='/events/:id' element={<EventDetails />} />
    </Routes>
  )
}

export default App
