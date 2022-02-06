import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import { ImBlocked } from "react-icons/im";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GoIcons.GoDashboard />,
    cName: "nav-text",
  },
  {
    title: "Complaints",
    path: "/complaints",
    icon: <ImBlocked />,
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/approve",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
