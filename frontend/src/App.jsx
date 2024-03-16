import React from "react"
import Footer from "./components/sk/components/footer"
import LazyLoad from "./components/sk/handlers/lazyload"
import { MyRoute } from "simple-react-router-x"

// Lazy components
const LazyHome = React.lazy(() => import('./components/sk/pages/home'))
const LazyEvents = React.lazy(() => import('./components/sk/pages/events'))
const LazyLogin = React.lazy(() => import('./components/sk/pages/auth/Login'))
const LazyCheckout = React.lazy(() => import('./components/sk/pages/checkout'))
const LazyBuyTickets = React.lazy(() => import('./components/sk/pages/buytickets'))
const LazyRegister = React.lazy(() => import('./components/sk/pages/auth/Register'))


function App() {
  return (
    <div className="h-full w-auto px-32 flex flex-col">
      <div className="pt-[200px] flex-auto">
        <MyRoute path="/" component={<LazyLoad component={<LazyHome />} />}  />
        <MyRoute path={"/events"} component={<LazyLoad component={<LazyEvents />} />}  />
        <MyRoute path={"/events/ticket"} component={<LazyLoad component={<LazyBuyTickets />} />}  />
        <MyRoute path={"/events/ticket/checkout"} component={<LazyLoad component={<LazyCheckout />} />}  />
        <MyRoute path={"/auth/login"} component={<LazyLoad component={<LazyLogin />} />} />
        <MyRoute path={"/auth/sign-up"} component={<LazyLoad component={<LazyRegister />} />} />
      </div>
      <Footer />
    </div>
  )
}

export default App
