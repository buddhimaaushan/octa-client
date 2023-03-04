import { Usersbar, Navbar, Sidebar } from "../templates";
import { Main } from "../layouts";

type Props = {};
function Home(props: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main>
        <Sidebar />
        <div className="bg-green-400 min-w-[500px] w-[50rem]  h-[500px] mb-5 last:mb-0 rounded-3xl opacity-5">
          1ZZZ
        </div>
        <Usersbar />
      </Main>
    </>
  );
}

export default Home;
