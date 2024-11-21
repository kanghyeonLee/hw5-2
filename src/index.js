import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShowList from "./components/Pages/ShowList";
import { BrowserRouter } from "react-router-dom";

const myComponent = <BrowserRouter><ShowList /></BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myComponent);