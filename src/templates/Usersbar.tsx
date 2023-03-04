import { UsersbarOptions, UsersbarUsers } from "../components";

type Props = {};

const Usersbar = (props: Props) => {
  return (
    <div className="overflow-y-hidden">
      <UsersbarOptions width="110" />
      <UsersbarUsers width="110" />
    </div>
  );
};

export default Usersbar;
