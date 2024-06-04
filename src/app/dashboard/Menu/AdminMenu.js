import React from "react";
import { FaFileContract, FaUserCog } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdDiscount } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import MenuItems from "./MenuItems";

const AdminMenu = () => {
  return (
    <>
      <MenuItems
        icon={RiAdminFill}
        label="Admin Profile"
        address="admin-profile"
      />
      <MenuItems
        icon={FaUserCog}
        label="Manage Members"
        address="manage-members"
      />
      <MenuItems
        icon={FaFileContract}
        label="Agreement Requests"
        address="agreement-request"
      />
      <MenuItems
        icon={MdDiscount}
        label="Manage Cupons"
        address="manage-cupons"
      />
      <MenuItems
        icon={GrAnnounce}
        label="Make Announcement"
        address="make-announcement"
      />
    </>
  );
};

export default AdminMenu;
