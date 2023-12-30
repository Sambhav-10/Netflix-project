import React from "react";
import Browse from "./Browse";
import Login from "./Components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
     
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
