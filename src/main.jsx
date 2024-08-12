import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>
  },
  {
    path: "/create",
    element: <CreateUser/>
  },
  {
    path: "/update/:id",
    element: <UpdateUser/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);