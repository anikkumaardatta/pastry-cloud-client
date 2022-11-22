import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li>
        <Link className="rounded-md px-8" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="rounded-md px-8" to="Pastries">
          Pastries
        </Link>
      </li>
      <li>
        <Link className="rounded-md px-8" to="/blogs">
          Blogs
        </Link>
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
          {user ? (
            <>
              <div className="dropdown dropdown-end dropdown-hover">
                <div className="avatar m-1 cursor-pointer" tabIndex={0}>
                  <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL && user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 text-rose-600 rounded-box w-52"
                >
                  <li className="cursor-default">
                    <p>{user?.displayName && user.displayName}</p>
                  </li>

                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost cursor-pointer"
                  >
                    Sign Out{" "}
                    <FaSignOutAlt className="ml-1 text-2xl"></FaSignOutAlt>
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost ">
                  Log In <FaSignInAlt className="ml-2 text-2xl"></FaSignInAlt>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
