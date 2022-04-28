import React from "react";

const AdminPage = React.lazy(() => import("../component/admin"));

const AdminAdd = React.lazy(() => import("../component/admin/addmovie"));
const AdminEdit = React.lazy(() => import("../component/admin/editmovie"))

export const adminroutes = [
 
  { path: "/admin", Component: AdminPage, title: "AdminPage" },
  { path: "/add-movie", Component: AdminAdd, title: "Add Movie" },
  { path: "/edit-movie", Component: AdminEdit, title: "View Movie" },

  
];