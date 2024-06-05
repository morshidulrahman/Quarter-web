import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import AnnounceCard from "./AnnounceCard";
import Loader from "../../shared/Loader";

const AnnounceMents = () => {
  const axiosCommon = useAxiosCommon();

  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["annouce"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/announcements`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center font-bold py-5 text-lg">Announcements</h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        {announcements?.map((announce) => (
          <AnnounceCard key={announce._id} announce={announce} />
        ))}
      </div>
    </div>
  );
};

export default AnnounceMents;
