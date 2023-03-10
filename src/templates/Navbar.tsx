import { NavbarIconList, ProfileCircle } from "../components";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="dark:bg-primaryLight/80 bg-white/70 drop-shadow-xl w-full h-20 py-3 px-2 dark:border border-gray-700 rounded-3xl flex justify-center sm:justify-between items-center">
      <div className="hidden sm:flex pl-6  justify-center font-bold dark:text-blue-400 text-blue-500 text-2xl select-none">
        Octamedia
      </div>

      <div className="w-full sm:w-max flex justify-between items-center">
        <div className="sm:mx-2 h-full flex flex-row-reverse sm:flex-row justify-center items-center">
          <NavbarIconList />
          <ProfileCircle
            img="https://randomuser.me/api/portraits/men/51.jpg"
            color="blue"
            size={10}
          />
        </div>

        <div className=" dark:bg-primaryDark/70 bg-blue-200 px-3 py-3 rounded-2xl  h-full flex justify-center items-center">
          <NavbarIconList subIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
