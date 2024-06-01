import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Container from "../../shared/Container";
import { useState } from "react";
import Menuitems from "../../shared/Menuitems";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, Logout } = useAuth();

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <Link to="/">
              <img src="/logo.png" alt="logo" width="140" height="100" />
            </Link>

            <Menuitems />

            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="   rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition w-8 h-8"
              >
                <div className="block md:hidden">
                  <AiOutlineMenu size={28} />
                </div>
                <div className="hidden md:block">
                  <img
                    className="rounded-full w-8 h-8"
                    referrerPolicy="no-referrer"
                    src={
                      user && user.photoURL ? user.photoURL : "/user-icon.png"
                    }
                    alt="profile"
                  />
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link className="block   px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                          Morshidul
                        </Link>
                        <Link
                          to="/dashboard"
                          className="block   px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>

                        <div
                          onClick={() => Logout()}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
