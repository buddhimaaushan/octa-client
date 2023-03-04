import { UserProfile, SidebarOptions } from "../components";

type Props = {};

function Sidebar(props: Props) {
  return (
    <>
      <UserProfile
        img="https://randomuser.me/api/portraits/men/52.jpg"
        name="Arachchige"
        sub="Software Engineer"
        followers="50.5M"
        following="500"
        verify="public"
        color="blue"
        width="104"
        state="public"
      />
      <SidebarOptions width="104" />
    </>
  );
}

export default Sidebar;
