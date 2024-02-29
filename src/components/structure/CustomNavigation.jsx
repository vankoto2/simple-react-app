import Contacts from "../pages/Contacts";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Private from "../pages/Private";

export const navigation = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/contacts",
    name: "Contacts",
    element: <Contacts />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/private",
    name: "Private",
    element: <Private />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/account",
    name: "Account",
    element: <Account />,
    isMenu: true,
    isPrivate: true,
  },
];
