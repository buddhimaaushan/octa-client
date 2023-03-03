import { useSelector, useDispatch } from "react-redux";
import { toggle, selectTheme } from "../../reducers/themeSlice";
import {
  Chat,
  Help,
  Nortification,
  Profile,
  Search,
  Setting,
  Theme,
} from "./NavbarButtons";

type Props = {};

const Navbar = (props: Props) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleTheme = () => dispatch(toggle());

  const handleSearch = () => {
    alert("Search clicked");
  };
  const handleNortification = () => {
    alert("Nortification clicked");
  };
  const handleChat = () => {
    alert("Chat clicked");
  };
  const handleProfile = () => {
    alert("Profile clicked");
  };
  const handleSetting = () => {
    alert("Setting clicked");
  };
  const handleHelp = () => {
    alert("Help clicked");
  };

  return (
    <div className="dark:bg-primaryLight/80 bg-white/70 drop-shadow-xl/80 w-full h-20 py-3 px-2 dark:border border-gray-700 rounded-3xl flex justify-center sm:justify-between items-center">
      <div className="hidden sm:flex pl-6  justify-center font-bold dark:text-blue-400 text-blue-500 text-2xl select-none">
        Octamedia
      </div>

      <div className="w-full sm:w-max flex justify-between items-center">
        <div className="sm:mx-2 h-full flex flex-row-reverse sm:flex-row justify-center items-center">
          <Search onClick={handleSearch} />
          <Nortification onClick={handleNortification} />
          <Chat onClick={handleChat} />
          <Profile onClick={handleProfile} />
        </div>

        <div className=" dark:bg-primaryDark/70 bg-blue-200 px-3 py-3 rounded-2xl  h-full flex justify-center items-center">
          <Theme onClick={handleTheme} theme={theme} />
          <Setting onClick={handleSetting} />
          <Help onClick={handleHelp} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
