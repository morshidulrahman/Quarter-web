import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAnnouncement, MdPayments } from "react-icons/md";
import { TbUserPentagon } from "react-icons/tb";
import MenuItems from "./MenuItems";

const MemberMenu = () => {
  return (
    <>
      <MenuItems
        icon={TbUserPentagon}
        label="My Profile"
        address="member-profile"
      />
      <MenuItems
        icon={MdPayments}
        label="Make Payment"
        address="make-payment"
      />
      <MenuItems
        icon={FaMoneyCheckDollar}
        label="Payment History"
        address="payment-history"
      />
      <MenuItems
        icon={MdAnnouncement}
        label="Announcement"
        address="announcement"
      />
    </>
  );
};

export default MemberMenu;
