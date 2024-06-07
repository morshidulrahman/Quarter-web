import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import Loader from "../../../shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TimeChange } from "../../../utils/TimeChange";

const MemberProfile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  const axiosSecure = useAxiosSecure();

  const { data: member = {}, isLoading: memberLoaing } = useQuery({
    queryKey: ["members", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/member/${user?.email}`);
      return data;
    },
  });

  if (isLoading || memberLoaing || loading) return <Loader />;

  const { floorNo, apartmentNo, blockName, time, rent } = member;

  const changeTime = TimeChange(time);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
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
            <div className="md:w-[90%] w-full">
              <h1 className="font-semibold py-5 text-center">
                Appertment Info
              </h1>
              <div className=" pb-2 flex  justify-between  items-center  w-full">
                <p className="font-semibold">Floor No: {floorNo}</p>
                <p className="font-semibold">Appertment No: {apartmentNo} </p>
              </div>
              <div className=" flex justify-between items-center  w-full">
                <p className="font-semibold">BlockName: {blockName} </p>
                <p className="font-semibold">Rent: {rent} </p>
              </div>
              <div className=" flex justify-between items-center  w-full mt-2">
                <p className="font-semibold">Agrement Date: {changeTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
