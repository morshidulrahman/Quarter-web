import React from "react";
import { NavLink } from "react-router-dom";

const Menuitems = () => {
  return (
    <div className="md:flex flex-col gap-5 hidden md:flex-row">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " text-lg font-semibold px-4  py-3  text-[#ff5a3c]"
            : "text-lg px-4 py-3"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/appartment"
        className={({ isActive }) =>
          isActive
            ? " text-lg font-semibold px-4  py-3  text-[#ff5a3c]"
            : "text-lg px-4 py-3"
        }
      >
        Appartment
      </NavLink>
    </div>
  );
};

export default Menuitems;
