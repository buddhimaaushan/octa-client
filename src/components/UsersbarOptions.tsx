import { RiUserReceived2Fill, RiUserSharedLine } from "react-icons/ri";
import { FaUserCheck, FaUserAltSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUserbar } from "../reducers/tweakSlice";

type Props = {
  width?: string;
};

const options = [
  { name: "Followers", color: "blue", icon: <RiUserReceived2Fill /> },
  { name: "Following", color: "purple", icon: <RiUserSharedLine /> },
  { name: "Active", color: "emerald", icon: <FaUserCheck /> },
  { name: "Blocked", color: "red", icon: <FaUserAltSlash /> },
];

function UsersbarOptions({ width = "106", ...props }: Props) {
  const dispatch = useDispatch();
  function handleOptions(text: string, color: string) {
    dispatch(setUserbar({ text, color }));
  }

  return (
    <div
      className={`dark:bg-primaryLight bg-blue-50/90 drop-shadow-lg w-${width}  h-fit p-5 mb-5 last:mb-0 rounded-3xl flex justify-center  shrink-0`}
    >
      <div className=" w-full h-fit rounded-2xl flex justify-between  ">
        {options.map((option, index) => (
          <div
            key={index}
            className={`pt-5 pb-4  w-24 flex flex-col justify-center items-center dark:bg-${option.color}-500 bg-${option.color}-200 dark:text-${option.color}-1000 text-${option.color}-600 dark:font-bold font-semibold  rounded-2xl cursor-pointer select-none drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}
            onClick={() => handleOptions(option.name, option.color)}
          >
            <div className="text-2xl mb-1 ">{option.icon}</div>
            <div>{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersbarOptions;
