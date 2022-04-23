import React from "react";

const AdminPage = React.lazy(() => import("../component/admin"));



export const adminroutes = [
 
  { path: "/admin", Component: AdminPage, title: "AdminPage" },

  
];