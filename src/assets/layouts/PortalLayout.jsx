import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"

const PortalLayout = () =>
{
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PortalLayout