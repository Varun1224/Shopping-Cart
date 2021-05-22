// eslint-disable-next-line
import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <div className="nav h-16 bg-blue-100 flex justify-end items-center">
      <div className="cartIconContainer relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />{" "}
        </svg>{" "}
        {/*SVG FROM HERO ICON */}
        <span className="cartCount w-6 text-center bg-yellow-500 absolute rounded-full right-2.5 -top-3">
          {" "}
          {props.count}{" "}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
