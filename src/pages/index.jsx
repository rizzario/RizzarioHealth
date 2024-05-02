import React from 'react';
import {
  Outlet,
} from "react-router-dom";

const NavigationBar = React.lazy(() => import("../components/layout/NavigationHeader"));
const ToppickBanner = React.lazy(() => import("../components/layout/ToppickCarousel"));
const HighLight_One = React.lazy(() => import("../components/layout/HighLightOne"));
const HighLight_Two = React.lazy(() => import("../components/layout/HighLightTwo"));

export default function Index() {
    return (
      <>
        <NavigationBar />
        <ToppickBanner />
        <HighLight_One />
        <HighLight_Two />
        <p id="zero-state">
          This is a demo for React Router.
          <br />
          Check out{" "}
          <a href="https://reactrouter.com">
            the docs at reactrouter.com
          </a>
          .
        </p>
      </>
    );
  }