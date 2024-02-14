import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="hover:text-[#9873FF] font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="hover:text-[#9873FF] font-semibold">
        <NavLink to="/applied"> Applied</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  absolute z-30 w-full bg-opacity-30 lg:ps-[150px] lg:pe-[150px] py-5    ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className=" navbar-end">
        <Link to="/featured">
          {" "}
          className="text-white hover:text-black btn bg-[#9873FF] "> Start
          Applying
        </Link>
      </div>
    </div>
  );
};

export default Header;
