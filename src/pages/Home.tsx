import { Usersbar, Navbar, Sidebar } from "../templates";
import { Main } from "../layouts";
import { Outlet } from "react-router-dom";

type Props = {};
function Home(props: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main>
        <Sidebar />
        <Outlet />
        <Usersbar />
      </Main>
    </>
  );
}

export default Home;
