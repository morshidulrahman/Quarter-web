import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import Loader from "../../../shared/Loader";

const UserProfile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <div className="w-full mb-4 rounded-t-lg h-36 bg-[#ff5a3c]"></div>
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-[#ff5a3c] rounded-full mt-4">
            {role}
          </p>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 w-[80%]">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
