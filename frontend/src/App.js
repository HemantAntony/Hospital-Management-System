import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios"
import './App.css';
import NavBar from './components/NavBar';
import Home from "./pages/Home"
import Departments from "./pages/Departments"
import Doctors from "./pages/Doctors"
import Appointments from "./pages/Appointments"
import Account from "./pages/Account"

function NavBarWrapper() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/departments',
        element: <Departments />
      },
      {
        path: '/doctors',
        element: <Doctors />
      },
      {
        path: '/appointments',
        element: <Appointments />
      },
      {
        path: '/account',
        element: <Account />
      },
    ]
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
