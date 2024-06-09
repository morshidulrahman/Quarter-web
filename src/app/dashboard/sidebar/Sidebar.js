import React, { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";

import UserMenu from "../Menu/UserMenu";
import AdminMenu from "../Menu/AdminMenu";
import MemberMenu from "../Menu/MemberMenu";
import useRole from "../../hooks/useRole";
import Loader from "../../shared/Loader";

const Sidebar = () => {
  const { Logout, loading } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isLoading] = useRole();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                src="https://i.ibb.co/mG15cWG/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* sidebar start */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-sm rounded-lg justify-center items-center   mx-auto">
              <Link to="/">
                <img
                  src="https://i.ibb.co/mG15cWG/logo.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-2">
            <nav>
              {role === "user" && <UserMenu />}
              {role === "member" && <MemberMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={Logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#ff593cf4]   hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
