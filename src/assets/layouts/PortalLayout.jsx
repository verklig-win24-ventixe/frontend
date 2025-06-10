import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"

function PortalLayout()
{
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <div className="main-scrollable-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PortalLayout