import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../assets/scss/navbar.scss'
import Home from './Home';
import React from 'react';
import { PageNotFound } from '../pages/PageNotFound';

export const Navbar = () => {
    
const About = React.lazy(() => import("../pages/About"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

    return (
      <div className="navbar">
        <div className="container">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
        </div>
      </div>
    );
}
function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li className="navbar-btn">
              <Link to="/">add</Link>
            </li>
            <li className="navbar-btn">
              <Link to="/about">mass delete</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        <Outlet />
      </div>
    );
  }
