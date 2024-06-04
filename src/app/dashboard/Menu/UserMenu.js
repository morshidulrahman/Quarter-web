import React from "react";
import MenuItems from "./MenuItems";
import { TbUserPentagon } from "react-icons/tb";
import { MdAnnouncement } from "react-icons/md";

const UserMenu = () => {
  return (
    <>
      <MenuItems
        icon={TbUserPentagon}
        label="My Profile"
        address="admin-profile"
      />
      <MenuItems
        icon={MdAnnouncement}
        label="Announcement"
        address="announcement"
      />
    </>
  );
};

export default UserMenu;
