import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";


export default function App() {
  return (
    <div className="app">
      <Navbar />
  
      <Footer />
    </div>
  );
}

