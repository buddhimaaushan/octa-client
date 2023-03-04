import { useSelector } from "react-redux";
import { selectUserbar } from "../reducers/tweakSlice";
import UserProfile from "./UserProfile";

import userData from "../data/users.json";

type Props = {
  width?: string;
};

const UsersbarUsers = ({ width = "106", ...props }: Props) => {
  const option = useSelector(selectUserbar);
  const users = userData;
  const state = option.text.toLowerCase();

  return (
    <div
      className={`dark:bg-${option.color}-1100 bg-${option.color}-50/50 drop-shadow-lg w-${width} min-h-[20rem] h-[calc(100%-9rem)] px-5 py-6 mb-5 last:mb-0 rounded-3xl flex flex-col justify-center items-center overflow-hidden  shrink-0 `}
    >
      <div
        className={`w-full flex justify-between items-center px-5 pb-5  font-semibold text-xl dark:text-${option.color}-400 text-${option.color}-600`}
      >
        <div>{option.text}</div>
        <div>175</div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-fit rounded-3xl px-5 scrollbar">
        {users?.map((user, index) => (
          <UserProfile
            key={index}
            img={user.img}
            name={user.name}
            sub={user.sub}
            followers={user.followers}
            following={user.following}
            verify={user.verify}
            color={option.color}
            width="104"
            state={state}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersbarUsers;
