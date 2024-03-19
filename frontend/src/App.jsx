import "./App.css";
import React from "react";
import { BRouter, MyRoute } from "simple-react-router-x";
import Header from "./components/Yesh/header/HeaderWrapper";
import Loader from "./components/Yesh/util/Loader";

export default function App() {
  return (
    <>
      <BRouter>
        <div className="app-wrapper">
          <div className="app-wrapper-over">
            <Header  />

            <MyRoute
              path={"/"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/home.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/events.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events/ticket"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/buytickets.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events/ticket/checkout"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/checkout.jsx"} />
                </SkWrapper>
              }
            />
            {/* <MyRoute
              path={"/user/profile"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/userdb.jsx"} />
                </SkWrapper>
              }
            /> */}
            <MyRoute
              path={"/user/events"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/userdb.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/auth/login"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/authentication.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/auth/forgot-password"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/authentication.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/auth/sign-up"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/authentication.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/service"}
              component={<Loader path={"/Services/ServicesWrapper.jsx"} />}
            />
          </div>
        </div>
      </BRouter>
    </>
  );
}
function SkWrapper({ children }) {
  return (
    <div style={{ padding: "150px 100px 0 100px", paddingTop: "110px" }}>
      {children}
    </div>
  );
}
