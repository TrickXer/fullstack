import "./App.css";
import React from "react";
import Footer from "./components/sk/components/footer";
import LazyLoad from './components/sk/handlers/lazyload'
import Header from "./components/Yesh/header/HeaderWrapper";
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/sk/handlers/ErrorBoundary';
import Authentication from "./components/sk/pages/user/authentication";
import { AdminRoutes, UserRoutes } from "./components/sk/handlers/ProtecedRoutes";


const Home = React.lazy(() => import('./components/sk/pages/user/home'))

// AUTH
const LazyLogin = React.lazy(() => import('./components/sk/components/auth/Login'))
const LazyRegister = React.lazy(() => import('./components/sk/components/auth/Register'))
const LazyForgotPassword = React.lazy(() => import('./components/sk/components/auth/ForgotPassword'))


export default function App() {
  const location = useLocation()
  const regex = /\/dashboard\//

  const isDashboard = regex.test(location.pathname)


  return (
    <div className="app-wrapper-over">
      <div className="app-wrapper">
        { !isDashboard && <Header /> }
        
        <ErrorBoundary>
          <SkWrapper>
            <Routes>
              {/* PUBLIC */}
              <Route exact path="/" element={<LazyLoad component={<Home />} />} />
              <Route path="/auth" element={<LazyLoad component={<Authentication />} />}>
                <Route path="login" element={<LazyLoad component={<LazyLogin />} />} />
                <Route path="sign-up" element={<LazyLoad component={<LazyRegister />} />} />
                <Route path="forgot-password" element={<LazyLoad component={<LazyForgotPassword />} />} />
              </Route>

              {/* PROTECTED */}
              <Route path="/user/*" element={<UserRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />

              {/* ERROR */}
              {/* <Route path="*" element={<LazyLoad component={<ErrorBoundary hasError={true} />} />} /> */}
            </Routes>
          </SkWrapper>
        </ErrorBoundary>
      </div>
      { !isDashboard && <Footer /> }
    </div>
  );
}
function SkWrapper({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', paddingTop: "0px" }}>
      {children}
    </div>
  );
}
