import React from "react";

const Home = React.lazy(() => import("../component/Home"));
const MovieDetails = React.lazy(() => import("../component/details"))


export const loggedinroutes = [

  { path: "/movie-details/:name/:id", Component: MovieDetails, title: "Movie Details" },
  
  
];