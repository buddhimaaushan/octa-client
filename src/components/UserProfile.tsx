import { MdVerified } from "react-icons/md";
import {
  RiShieldStarFill,
  RiUserReceived2Fill,
  RiUserSharedLine,
} from "react-icons/ri";
import {
  FaUserCheck,
  FaUserLock,
  FaGlobeAsia,
  FaUserPlus,
  FaUserMinus,
  FaTrash,
  FaUserSlash,
} from "react-icons/fa";

type Props = {
  img: string;
  name: string;
  sub: string;
  followers: string;
  following: string;
  verify?: string;
  state?: string;
  color?: string;
  width?: string;
};

function Profile({ color = "blue", width = "106", ...props }: Props) {
  const name = props.name.slice(0, 11);
  const sub = props.sub.slice(0, 20);
  return (
    <>
      <div
        className={`dark:bg-${color}-1000 bg-${color}-50/90 drop-shadow-lg w-${width}  h-fit p-5 mb-5 last:mb-0 rounded-3xl flex justify-center hover:-translate-y-1 transition-all duration-300 ease-in-out shrink-0`}
      >
        <div className=" w-full h-24 rounded-2xl flex justify-start cursor-pointer select-none ">
          <div className="relative h-full flex justify-center items-center">
            <img
              src={props.img}
              alt="profile"
              className={`bg-${color}-200 w-16 h-16 outline outline-4 hover:outline-8 outline-offset-4  outline-${color}-500 rounded-full drop-shadow-lg m-4 transition-all duration-100 ease-in-out`}
            />
          </div>
          <div className="mx-5 flex flex-col justify-center">
            <h1 className="text-2xl dark:text-gray-100 text-gray-800 font-semibold flex justify-start items-center">
              {name || "Unknown"}
              {props.verify && (
                <span
                  className={`mx-2 ${
                    (props.verify === "user" && "text-green-700") ||
                    (props.verify === "public" && "text-blue-700")
                  }`}
                >
                  <MdVerified />
                </span>
              )}
            </h1>
            <p className="text-lg dark:text-gray-400 text-gray-500 font-medium">
              {sub}
            </p>
            <div className={`flex dark:text-${color}-400 text-${color}-500`}>
              <div className="text-lg  font-medium flex justify-center items-center mr-6">
                <RiUserReceived2Fill />
                <p className="ml-2">{props.followers || 0}</p>
              </div>

              <div className="text-lg  font-medium flex justify-center items-center ">
                <RiUserSharedLine />
                <p className="ml-2">{props.following || 0}</p>
              </div>
            </div>
          </div>
          <div className="h-full w-fit mx-auto text-3xl flex justify-center items-center">
            <div
              className={`dark:text-${color}-1000 text-${color}-600 dark:bg-${color}-500 bg-${color}-200 p-5 dark:border-0 border border-${color}-300  rounded-3xl`}
            >
              {props.state === "protected " && <RiShieldStarFill />}
              {props.state === "private" && <FaUserLock />}
              {props.state === "public" && <FaGlobeAsia />}
              {props.state === "addFriend" && <FaUserPlus />}
              {props.state === "followers" && <RiUserReceived2Fill />}
              {props.state === "following" && <RiUserSharedLine />}
              {props.state === "active" && <FaUserCheck />}
              {props.state === "removeUser" && <FaUserMinus />}
              {props.state === "delete" && <FaTrash />}
              {props.state === "blocked" && <FaUserSlash />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function UserProfile(props: Props) {
  return <Profile {...props} />;
}
