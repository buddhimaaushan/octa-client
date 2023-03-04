import { RiTimeLine } from "react-icons/ri";
import { BsNewspaper, BsBookmarkCheckFill } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { GiStarSattelites } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import SidebarLink from "./SidebarLink";

type Props = {
  width?: string;
};

function SidebarOptions({ width = "106", ...props }: Props) {
  return (
    <div
      className={`dark:bg-primaryLight bg-white/90 drop-shadow-lg w-${width} h-fit p-5 mb-5 last:mb-0 rounded-3xl flex flex-col items-start justify-center transition-all duration-300 ease-in-out shrink-0`}
    >
      <SidebarLink>
        <div>
          <RiTimeLine />
        </div>
        <div>Personal Timeline</div>
      </SidebarLink>
      <SidebarLink>
        <div>
          <BsNewspaper />
        </div>
        <div>News Feed</div>
      </SidebarLink>
      <SidebarLink>
        <div>
          <HiTrendingUp />
        </div>
        <div>Trending</div>
      </SidebarLink>
      <SidebarLink>
        <div>
          <GiStarSattelites />
        </div>
        <div>Popular</div>
      </SidebarLink>
      <SidebarLink>
        <div>
          <MdFavorite />
        </div>
        <div>Favourite</div>
      </SidebarLink>
      <SidebarLink>
        <div>
          <BsBookmarkCheckFill />
        </div>
        <div>Saved</div>
      </SidebarLink>
    </div>
  );
}

export default SidebarOptions;
