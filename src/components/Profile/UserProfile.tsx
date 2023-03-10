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
import ProfileCircle from "./ProfileCircle";

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
  size?: "small" | "medium";
};

function UserProfile({
  color = "blue",
  width = "106",
  size = "medium",
  ...props
}: Props) {
  // const name = "123456789012345";
  const name = props.name.slice(0, 15);
  // const sub = "12345678901234567890";
  const sub = props.sub.slice(0, 20);
  return (
    <>
      <div
        className={`dark:bg-${color}-1000 bg-${color}-50/90 drop-shadow-lg w-${width}  h-fit p-5 mb-5 last:mb-0 rounded-3xl flex justify-center hover:scale-[1.03] active:scale-[0.97] trans-ele shrink-0`}
      >
        <div
          className={` w-full ${
            size === "small" ? "h-[4.5rem] " : "h-[6.5rem] "
          } rounded-2xl flex justify-start cursor-pointer select-none `}
        >
          <ProfileCircle
            img={props.img}
            color={color}
            size={size === "small" ? 14 : 16}
          />
          <div
            className={`${
              size === "small" ? "ml-3" : "ml-5"
            } flex flex-col justify-center`}
          >
            <h1
              className={`${
                size === "small" ? "text-lg " : "text-xl"
              } dark:text-gray-100 text-gray-800 font-semibold flex justify-start items-center`}
            >
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
            <p
              className={`${
                size === "small" ? "text-sm" : "text-md"
              }  dark:text-gray-400 text-gray-500 font-medium`}
            >
              {sub}
            </p>
            <div
              className={`${
                size === "small" ? "text-sm" : "text-md"
              } flex dark:text-${color}-400 text-${color}-600`}
            >
              <div
                className={` font-medium flex justify-center items-center ${
                  size === "small" ? "mr-4" : "mr-6"
                }`}
              >
                <RiUserReceived2Fill />
                <p className={`${size === "small" ? "m-1" : "m-2"}`}>
                  {props.followers || 0}
                </p>
              </div>

              <div className="  font-medium flex justify-center items-center ">
                <RiUserSharedLine />
                <p className={`${size === "small" ? "m-1" : "m-2"}`}>
                  {props.following || 0}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`h-full w-fit ${
              size === "small" ? "ml-auto text-xl" : "ml-auto text-3xl"
            }  flex justify-center items-center`}
          >
            <div
              className={`mr-2 dark:text-${color}-1000 text-${color}-600 dark:bg-${color}-500 bg-${color}-200  dark:border-0 border border-${color}-300 ${
                size === "small" ? "rounded-2xl p-3 " : "rounded-3xl p-5"
              } `}
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
export default UserProfile;
