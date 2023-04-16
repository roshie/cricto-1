import React from "react";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import Result from "./components/Result/Result";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/upload",
    element: <Upload/>,
  },
  {
    path: "/result",
    element: <Result/>,
  }
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

