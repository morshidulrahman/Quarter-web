import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = ({ address, label, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#ff593cf4]   hover:text-white ${
          isActive ? "bg-[#ff593cf4] text-white" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItems;
