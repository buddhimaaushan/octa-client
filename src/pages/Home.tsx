import { Navbar } from "../components";
import { Main } from "../layouts";

type Props = {};
function Home(props: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main
        left={
          <>
            <div className="bg-green-400   w-[600px] h-[500px] mb-5 last:mb-0 rounded-3xl flex justify-center">
              1ZZZ
            </div>
            <div className="bg-green-400  w-[600px] h-[500px] mb-5 last:mb-0 rounded-3xl ">
              2ZZZ
            </div>
            <div className="bg-green-400  w-[600px] h-[500px] mb-5 last:mb-0 rounded-3xl ">
              3ZZZ
            </div>
            <div className="bg-green-400  w-[600px] h-[500px] mb-5 last:mb-0">
              4ZZZ
            </div>
          </>
        }
        center={
          <>
            <div className="bg-green-400 min-w-[500px] w-[2000px]  h-[500px] mb-5 last:mb-0 rounded-3xl ">
              1ZZZ
            </div>
            <div className="bg-green-400 min-w-[500px] w-[2000px]  h-[500px] mb-5 last:mb-0 rounded-3xl ">
              2ZZZ
            </div>
            <div className="bg-green-400 min-w-[500px] w-[2000px]  h-[500px] mb-5 last:mb-0 rounded-3xl ">
              3ZZZ
            </div>
            <div className="bg-green-400 min-w-[500px] w-[2000px]  h-[500px] mb-5 last:mb-0">
              4ZZZ
            </div>
          </>
        }
        right={
          <>
            <div className="bg-green-400  w-[800px]  h-[500px] mb-5 last:mb-0 rounded-3xl ">
              1ZZZ
            </div>
            <div className="bg-green-400  w-[800px] h-[500px] mb-5 last:mb-0 rounded-3xl ">
              2ZZZ
            </div>
            <div className="bg-green-400  w-[800px] h-[500px] mb-5 last:mb-0 rounded-3xl ">
              3ZZZ
            </div>
            <div className="bg-green-400  w-[800px] h-[500px] mb-5 last:mb-0">
              4ZZZ
            </div>
          </>
        }
      />
    </>
  );
}

export default Home;
