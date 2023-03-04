import { RiUserReceived2Fill, RiUserSharedLine } from "react-icons/ri";
import { FaUserCheck, FaUserAltSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUserbar } from "../reducers/tweakSlice";

type Props = {
  width?: string;
};

function UsersbarOptions({ width = "106", ...props }: Props) {
  const dispatch = useDispatch();
  function handleOptions(text: string, color: string) {
    dispatch(setUserbar({ text, color }));
  }

  return (
    <div
      className={`dark:bg-primaryLight bg-blue-50/90 drop-shadow-lg w-${width}  h-fit p-3 mb-5 last:mb-0 rounded-3xl flex justify-center  shrink-0`}
    >
      <div className=" w-full h-fit rounded-2xl flex justify-between  ">
        <div
          className="pt-5 pb-4  w-26 flex flex-col justify-center items-center dark:bg-blue-500 bg-blue-200 dark:text-blue-1000 text-blue-600 dark:font-bold font-semibold  rounded-2xl cursor-pointer select-none drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          onClick={() => handleOptions("Followers", "blue")}
        >
          <div className="text-2xl mb-1 ">
            <RiUserReceived2Fill />
          </div>
          <div>Followers</div>
        </div>
        <div
          className="pt-5 pb-4  w-26 flex flex-col justify-center items-center dark:bg-purple-500 bg-purple-200 dark:text-purple-1000 text-purple-600 dark:font-bold font-semibold  rounded-2xl cursor-pointer select-none drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          onClick={() => handleOptions("Following", "purple")}
        >
          <div className="text-2xl mb-1">
            <RiUserSharedLine />
          </div>
          <div>Following</div>
        </div>
        <div
          className="pt-5 pb-4  w-26 flex flex-col justify-center items-center dark:bg-emerald-500 bg-emerald-300 dark:text-emerald-1000 text-emerald-700 dark:font-bold font-semibold  rounded-2xl cursor-pointer select-none drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          onClick={() => handleOptions("Active", "emerald")}
        >
          <div className="text-2xl mb-1">
            <FaUserCheck />
          </div>
          <div>Active</div>
        </div>
        <div
          className="pt-5 pb-4  w-26 flex flex-col justify-center items-center dark:bg-red-500 bg-red-200 dark:text-red-1000 text-red-600 dark:font-bold font-semibold  rounded-2xl cursor-pointer select-none drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          onClick={() => handleOptions("Blocked", "red")}
        >
          <div className="text-2xl mb-1">
            <FaUserAltSlash />
          </div>
          <div>Blocked</div>
        </div>
      </div>
    </div>
  );
}

export default UsersbarOptions;
