import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSignInAlt } from "react-icons/fa";
const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="bg-rose-600 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto text-white navbar">
        <div className="navbar-start">
          <div className="dropdown bg-rose-600">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-rose-600 w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case px-0 text-xl italic sm:text-lg">
            <img src={logo} style={{ width: "50px" }} alt="" />
            Pastry{" "}
            <span className="bg-white px-1 mx-1 rounded-sm text-red-500">
              Cloud
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div
            className="tooltip tooltip-bottom  tooltip-primary"
            data-tip="Log in"
          >
            <Link to="/login">
              <button className="btn btn-ghost text-2xl">
                <FaSignInAlt></FaSignInAlt>
              </button>
            </Link>
          </div>
          {/* <div className="btn btn-ghost">
            <div className="text-1xl font-semibold">Anik Datta</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
