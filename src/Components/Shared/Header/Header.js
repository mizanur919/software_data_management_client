import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="fixed bg-white w-full shadow-sm">
        <div className="container flex justify-between items-center px-4 md:px-8 py-4">
          <div>
            <Link to="/home">
              <h2>ASSDM</h2>
            </Link>
          </div>
          <nav>
            <button className="md:hidden" id="nav-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              className="fixed left-0 right-0 min-h-screen bg-indigo-500 md:bg-white space-y-4 transform translate-x-full md:flex md:relative md:min-h-0 md:space-y-0 md:space-x-6 md:translate-x-0"
              id="nav-mobile"
            >
              <li>
                <Link to="/home" className="text-white md:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hriplist" className="text-white md:text-gray-800">
                  HR IP List
                </Link>
              </li>
              <li>
                <Link to="/wmsiplist" className="text-white md:text-gray-800">
                  WMS IP List
                </Link>
              </li>
              <li>
                <Link
                  to="/addnewhrinfo"
                  className="text-white md:text-gray-800"
                >
                  Add HR Info
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white md:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white md:text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
