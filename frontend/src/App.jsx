import "./App.css";
import React from "react";
import Footer from "./components/sk/components/footer";
import LazyLoad from './components/sk/handlers/lazyload'
import Header from "./components/Yesh/header/HeaderWrapper";
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/sk/handlers/ErrorBoundary';
import { AdminRoutes, UserRoutes } from "./components/sk/handlers/ProtecedRoutes";
import Api from "./components/sk/utils/api";


// AUTH
const LazyAuth = React.lazy(() => import('./components/sk/pages/authentication'))
const LazyLogin = React.lazy(() => import('./components/sk/components/auth/Login'))
const LazyRegister = React.lazy(() => import('./components/sk/components/auth/Register'))
const LazyForgotPassword = React.lazy(() => import('./components/sk/pages/forgotPassword'))
const LazyVerifyAccount = React.lazy(() => import('./components/sk/pages/verifyAccount'))


export default function App() {
  const location = useLocation()
  const regex = /\/(dashboard|auth)/

  const isDashboard = regex.test(location.pathname)
  Api.refreshToken()

  return (
    <div className="app-wrapper-over">
      <div className="app-wrapper">
        <ErrorBoundary>
          { !isDashboard && <Header /> }
        
          <SkWrapper>
            <Routes>
              {/* PUBLIC */}
              <Route path="/auth" element={<LazyLoad component={<LazyAuth />} />}>
                <Route index element={<LazyLoad component={<LazyLogin />} />} />
                <Route path="login" element={<LazyLoad component={<LazyLogin />} />} />
                <Route path="sign-up" element={<LazyLoad component={<LazyRegister />} />} />
              </Route>

              <Route>
                <Route path="/auth/forgot-password" element={<LazyLoad component={<LazyForgotPassword />} />} />
                <Route path="/auth/verify-account" element={<LazyLoad component={<LazyVerifyAccount />} />} />
              </Route>

              {/* PROTECTED */}
              <Route path="/*" element={<UserRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />

              {/* ERROR */}
              <Route path="*" element={<LazyLoad component={<ErrorBoundary hasError={true} />} />} />
            </Routes>
          </SkWrapper>
          
          { !isDashboard && <Footer /> }
        </ErrorBoundary>
      </div>
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
