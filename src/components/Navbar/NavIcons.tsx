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

type Props = {
  hover: boolean;
};

const className = "dark:text-blue-400 text-blue-500 text-3xl ";

export function SearchIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <RiSearchFill className={className} />;
  } else {
    return <RiSearchLine className={className} />;
  }
}
export function NortificationIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <FaBell className={className} />;
  } else {
    return <FaRegBell className={className} />;
  }
}
export function ChatIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <RiChat3Fill className={className} />;
  } else {
    return <RiChat3Line className={className} />;
  }
}
export function DarkIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <RiMoonFill className={className} />;
  } else {
    return <RiMoonLine className={className} />;
  }
}
export function LightIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <BsSunFill className={className} />;
  } else {
    return <BsSun className={className} />;
  }
}
export function SettingIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <RiSettings3Fill className={className} />;
  } else {
    return <RiSettings3Line className={className} />;
  }
}
export function HelpIcon(props: Props): JSX.Element {
  if (props.hover) {
    return <IoIosHelpCircle className={className} />;
  } else {
    return <IoIosHelpCircleOutline className={className} />;
  }
}
