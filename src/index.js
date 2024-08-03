import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


const root = createRoot(document.getElementById("root"))

root.render(< App/>)

// ReactDOM.render(< App/>, document.getElementById("root"))