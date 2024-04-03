import { CgProfile } from "react-icons/cg";
// import { BiMessageSquareAdd } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
const userId = sessionStorage.getItem("userId");

const menus = [
  {
    id: "dashboard",
    role: 0,
    title: "Profile",
    type: "item",
    icon: <CgProfile />,
    url: "/profile",
  },
  {
    id: "user",
    role: 0,
    title: "Neareast Users",
    type: "item",
    icon: <CgProfile />,
    url: "/users",
  },
  {
    id: "sign-out",
    role: 0,
    title: "Log Out",
    type: "item",
    icon: <FiLogOut />,
    url: "/auth/signin",
  },
];

const menuItems = {
  items: [
    {
      id: "panel",
      title: "",
      type: "group",
      icon: "icon-user",
      children: menus,
    },
  ],
};

export default menuItems;
