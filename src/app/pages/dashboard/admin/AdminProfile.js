import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import Loader from "../../../shared/Loader";
import { FaHouseUser, FaUsers } from "react-icons/fa";
import ProfileBox from "../../../dashboard/admin/ProfileBox";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdCardMembership } from "react-icons/md";
import { FaHouseMedical, FaHouseMedicalCircleCheck } from "react-icons/fa6";

const AdminProfile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  const axiosSecure = useAxiosSecure();

  const {
    data: adminInfo = {},
    isLoading: adminLoading,
    refetch,
  } = useQuery({
    enabled: !loading || !!user?.email,
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/admin-stats`);
      return data;
    },
  });

  if (isLoading || loading || adminLoading) return <Loader />;

  const { users, members, rooms, agrement, aviablerooms } = adminInfo;

  return (
    <div>
      <div className="flex  h-screen flex-col">
        <div className="flex gap-5 items-center mt-4 px-10 md:px-20 py-5 lg:flex-row flex-col w-full flex-wrap">
          <ProfileBox icon={FaUsers} label="Total Users" value={users} />
          <ProfileBox
            icon={MdCardMembership}
            label="Total Members"
            value={members}
          />
          <ProfileBox icon={FaHouseUser} label="Total Rooms" value={rooms} />
          <ProfileBox
            icon={FaHouseMedicalCircleCheck}
            label="Agrements Rooms"
            value={agrement}
            percent={true}
          />
          <ProfileBox
            icon={FaHouseMedical}
            label="Available Rooms"
            value={aviablerooms}
            percent={true}
          />
        </div>
        <div className="bg-white shadow-lg rounded-2xl md:w-3/5 w-[70%] mt-10  mx-auto ">
          <div className="w-full mb-4 rounded-t-lg h-36 bg-[#ff5a3c]"></div>
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a className="relative block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <p className="p-2 px-4 text-xs text-white bg-[#ff5a3c] rounded-full mt-4">
              {role}
            </p>

            <div className="w-full p-2 mt-4 rounded-lg flex items-center justify-center flex-col">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 md:w-[90%] w-full">
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
    </div>
  );
};

export default AdminProfile;
