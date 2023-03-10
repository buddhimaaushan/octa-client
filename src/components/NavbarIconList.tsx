import {
  RiChat3Line,
  RiChat3Fill,
  RiSettings3Line,
  RiSettings3Fill,
} from "react-icons/ri";
import { IoIosHelpCircleOutline, IoIosHelpCircle } from "react-icons/io";
import { FaRegBell, FaBell } from "react-icons/fa";
import { RiMoonFill, RiMoonLine } from "react-icons/ri";
import { BsSunFill, BsSun } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { toggle, selectTheme } from "../reducers/themeSlice";
import Button from "./Button";

type Props = {
  subIcons?: boolean;
};

const NavbarIconList = ({ subIcons = false }: Props) => {
  const theme = useSelector(selectTheme);
  const nortifications = 107;
  const chats = 9;
  const dispatch = useDispatch();

  const main = [
    {
      onClick: () => alert("clicked"),
      icon: <RiSearchLine />,
      hoverIcon: <RiSearchFill />,
    },
    {
      onClick: () => alert("clicked"),
      icon: <FaRegBell />,
      hoverIcon: <FaBell />,
      badge: true,
      badgeCount: nortifications,
    },
    {
      onClick: () => alert("clicked"),
      icon: <RiChat3Line />,
      hoverIcon: <RiChat3Fill />,
      badge: true,
      badgeCount: chats,
    },
  ];

  const sub = [
    {
      onClick: () => dispatch(toggle()),
      icon: theme ? <BsSun /> : <RiMoonLine />,
      hoverIcon: theme ? <BsSunFill /> : <RiMoonFill />,
    },
    {
      onClick: () => alert("clicked"),
      icon: <RiSettings3Line />,
      hoverIcon: <RiSettings3Fill />,
    },
    {
      onClick: () => alert("clicked"),
      icon: <IoIosHelpCircleOutline />,
      hoverIcon: <IoIosHelpCircle />,
    },
  ];

  return (
    <>
      {subIcons
        ? sub.map((btn, index) => (
            <Button
              key={index}
              onClick={btn.onClick}
              icon={btn.icon}
              hoverIcon={btn.hoverIcon}
              size="custom"
              mode="normal"
              className="mx-1 p-1 dark:text-blue-400 text-blue-500 text-3xl"
            />
          ))
        : main.map((btn, index) => (
            <Button
              key={index}
              onClick={btn.onClick}
              icon={btn.icon}
              size="custom"
              mode="normal"
              badged={btn.badge}
              badgeCount={btn.badgeCount}
              className="mx-2 p-2 dark:bg-transparent bg-blue-100  dark:text-blue-400 text-blue-500 text-3xl dark:border border-gray-700 dark:rounded-xl rounded-full"
            />
          ))}
    </>
  );
};

export default NavbarIconList;
