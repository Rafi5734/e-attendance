import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Admin from "../src/components/admin/Admin.jsx";
import Users from "../src/components/users/Users.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuperAdmin from "./components/SuperAdmin.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/users/dashboard/Dashboard.jsx";
import Holiday from "./components/users/holiday/Holiday.jsx";
import Apply from "./components/users/leave/apply/Apply.jsx";
import AllLeave from "./components/users/leave/allLeave/AllLeave.jsx";
import Notice from "./components/users/notice/Notice.jsx";
import Report from "./components/users/report/Report.jsx";
import UpdateInfo from "./components/users/updateInfo/UpdateInfo.jsx";
import UpdatePassword from "./components/users/updatePassword/UpdatePassword.jsx";
import Login from "./components/authentication/Login.jsx";
import Error from "./components/error/Error.jsx";
import Notification from "./components/users/notification/Notification.jsx";
import AllMember from "./components/users/member/allMember/AllMember.jsx";
import AddMember from "./components/users/member/addMember/AddMember.jsx";
import Registration from "./components/authentication/Registration.jsx";
import Profile from "./components/users/member/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/holiday",
        element: <Holiday />,
      },
      {
        path: "/leave/apply",
        element: <Apply />,
      },
      {
        path: "/leave/allLeave",
        element: <AllLeave />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/updateInfo",
        element: <UpdateInfo />,
      },
      {
        path: "/updatePass",
        element: <UpdatePassword />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/member/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
