import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
