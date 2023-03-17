import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.svg";
import navigation from "./navigator";

function Sidebar(props) {
  const nav = navigation;
  const currentRoute = useLocation();
  return (
    <div
      className={`bg-sky-200 fixed top-0 h-full w-60 transition-all duration-500 ease-in-out z-20 lg:z-0 
      ${
        props.show
          ? "left-0"
          : "lg:-left-[calc(theme(spacing.60))] -left-[100%]"
      }
      `}
    >
      <img className="p-3 animate-spin" src={logo} alt="" />
      <div className="h-[0.5px] bg-sky-700 w-full"></div>
      <div className="overflow-y-auto scroll-smooth h-[calc(100vh_-_theme(spacing.60))]">
        {nav.map((n, idx) => (
          <Link key={idx} to={n.path}>
            <div
              className={`font-medium w-full text-[#105060] hover:text-white rounded hover:bg-sky-500 p-3 my-3 ${
                currentRoute.pathname === n.path ? "bg-sky-300" : ""
              }`}
            >
              {n.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
