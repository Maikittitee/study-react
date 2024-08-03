import React from "react";
import App from "./App";
import Contact from "./Contact";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


const root = createRoot(document.getElementById("root"))

// root.render(< App/>)
root.render(< Contact/>)

// ReactDOM.render(< App/>, document.getElementById("root"))