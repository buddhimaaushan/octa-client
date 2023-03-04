import { useSelector, useDispatch } from "react-redux";
import { toggle, selectTheme } from "../reducers/themeSlice";
import {
  BtnChat,
  BtnHelp,
  BtnNortification,
  BtnProfile,
  BtnSearch,
  BtnSetting,
  BtnTheme,
} from "../components";

type Props = {};

const Navbar = (props: Props) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleTheme = () => dispatch(toggle());

  const handleSearch = () => {
    alert("BtnSearch clicked");
  };
  const handleNortification = () => {
    alert("BtnNortification clicked");
  };
  const handleChat = () => {
    alert("BtnChat clicked");
  };
  const handleProfile = () => {
    alert("BtnProfile clicked");
  };
  const handleSetting = () => {
    alert("BtnSetting clicked");
  };
  const handleHelp = () => {
    alert("BtnHelp clicked");
  };

  return (
    <div className="dark:bg-primaryLight/80 bg-white/70 drop-shadow-xl w-full h-20 py-3 px-2 dark:border border-gray-700 rounded-3xl flex justify-center sm:justify-between items-center">
      <div className="hidden sm:flex pl-6  justify-center font-bold dark:text-blue-400 text-blue-500 text-2xl select-none">
        Octamedia
      </div>

      <div className="w-full sm:w-max flex justify-between items-center">
        <div className="sm:mx-2 h-full flex flex-row-reverse sm:flex-row justify-center items-center">
          <BtnSearch onClick={handleSearch} />
          <BtnNortification onClick={handleNortification} />
          <BtnChat onClick={handleChat} />
          <BtnProfile onClick={handleProfile} />
        </div>

        <div className=" dark:bg-primaryDark/70 bg-blue-200 px-3 py-3 rounded-2xl  h-full flex justify-center items-center">
          <BtnTheme onClick={handleTheme} theme={theme} />
          <BtnSetting onClick={handleSetting} />
          <BtnHelp onClick={handleHelp} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
