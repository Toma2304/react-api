import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Landing from "./pages/Landing";
import Data from "./pages/Data";

import "./style.scss";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/data",
          element: <Data />,
        },
        {
          path: "*",
          element: <h1>404</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
