import { RiTimeLine } from "react-icons/ri";
import { BsNewspaper, BsBookmarkCheckFill } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { GiStarSattelites } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "./Button";

type Props = {
  width?: string;
};

const navList = [
  { name: "News Feed", icon: <BsNewspaper />, link: "/" },
  { name: "Timeline", icon: <RiTimeLine />, link: "timeline" },
  { name: "Trending", icon: <HiTrendingUp />, link: "trending" },
  { name: "Popular", icon: <GiStarSattelites />, link: "popular" },
  { name: "Favourite", icon: <MdFavorite />, link: "favourite" },
  { name: "Saved", icon: <BsBookmarkCheckFill />, link: "saved" },
];

function SidebarOptions({ width = "106", ...props }: Props) {
  return (
    <div
      className={`dark:bg-primaryLight bg-white/90 drop-shadow-lg w-${width} h-fit p-5 mb-5 last:mb-0 rounded-3xl flex flex-col items-start justify-center transition-all duration-300 ease-in-out shrink-0`}
    >
      {navList.map(({ icon, name, link }, index) => (
        <NavLink key={index} to={link} className="w-full mb-5 last:mb-0">
          {({ isActive }) => (
            <Button
              key={index}
              name={name}
              icon={icon}
              size="large"
              mode={isActive ? "fill" : "outline"}
              className="justify-start w-full"
            />
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarOptions;
