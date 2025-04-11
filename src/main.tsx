import { StrictMode } from "react";
/* import { createRoot } from "react-dom/client"; */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./app/App.tsx";
import Home from "./pages/home/components/Home.tsx";
import Register from "./pages/register/components/Register.tsx";
import Weather from "./pages/weather/components/Weather.tsx";

import { homeDataList } from "./pages/home/data/homeData.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children : [
      {
        path: "/",
        element: <Home homeDataList={homeDataList} />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/weather",
        element: <Weather />
      }
    ]
  }
])

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
