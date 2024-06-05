import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakeAnnoucement = () => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (announceinfo) => {
      const { data } = await axiosSecure.post("/announcements", announceinfo);
      return data;
    },
    onSuccess: () => {
      toast.success("annoucement created successfully");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const description = from.description.value;
    const announceInfo = {
      title,
      description,
      date: Date.now(),
    };
    try {
      await mutateAsync(announceInfo);
      from.reset();
    } catch (e) {
      from.reset();
      toast.error(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col py-10">
      <div className="w-[80%] md:w-[60%] bg-gray-100 rounded-lg shadow-md p-5">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Make Annoucement
        </h1>
        <form className="py-3" onSubmit={handleSubmit}>
          <div>
            <label className="font-semibold mb-2 block">Title</label>
            <input
              name="title"
              type="text"
              className="outline-none rounded-md border-gray-50 px-2 py-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label className="font-semibold mb-2 block">Description</label>
            <textarea
              name="description"
              type="text"
              className="outline-none rounded-md border-gray-50 px-2 h-24 w-full"
            />
          </div>
          <button
            className="mt-4 bg-[#ff5a3c] text-white px-7 py-2 rounded-md transition-all duration-300 hover:scale-105"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnoucement;
