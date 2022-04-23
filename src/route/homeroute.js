import React from "react";

const Home = React.lazy(() => import("../component/Home"));



export const homeroutes = [
  { path: "/", Component: Home, title: "Home" },
  

  
];