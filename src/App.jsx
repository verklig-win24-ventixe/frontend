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
import PrivateRoute from './assets/components/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path='/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='/events' element={<PrivateRoute><EventsPage /></PrivateRoute>} />
        <Route path='/events/:id' element={<PrivateRoute><EventDetailsPage /></PrivateRoute>} />
        <Route path='/events/booking/:id' element={<PrivateRoute><EventBookingPage /></PrivateRoute>} />
      </Route>
    </Routes>
  )
}

export default App
