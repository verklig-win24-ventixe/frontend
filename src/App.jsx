import { Route, Routes } from 'react-router-dom'
import './css/site.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import LoginPage from './assets/pages/LoginPage'
import RegisterPage from './assets/pages/RegisterPage'
import EventsPage from './assets/pages/EventsPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import EventBookingPage from './assets/pages/EventBookingPage'
import DashboardPage from './assets/pages/DashboardPage'

function App() {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/events/:id' element={<EventDetailsPage />} />
        <Route path='/events/booking/:id' element={<EventBookingPage />} />
      </Route>
    </Routes>
  )
}

export default App
