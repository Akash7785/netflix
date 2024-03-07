import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import TrailerPlayer from "./TrailerPlayer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "movie",
      element: <MovieDetail />,
    },
    {
      path: "trailer",
      element: <TrailerPlayer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
