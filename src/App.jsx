import { Route, Routes } from 'react-router-dom'
import './css/site.css'
import Events from './assets/pages/Events'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import EventDetails from './assets/pages/EventDetails'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventDetails />} />
      </Route>
    </Routes>
  )
}

export default App
