import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { selectWidth } from "../reducers/dimensionSlice";

function Div(props: PropsWithChildren) {
  return (
    <div className="w-auto h-full px-3 py-1 flex flex-col justify-start items-center  rounded-3xl  overflow-x-hidden overflow-y-auto scrollbar  ">
      {props.children}
    </div>
  );
}

type Props = {
  children: Array<React.ReactNode>;
};

function Main({ children }: Props) {
  const width = useSelector(selectWidth);
  return (
    <main className="w-full h-[calc(100%-6.3rem)] my-5 flex justify-around items-start  rounded-3xl overflow-hidden">
      {width < 1200 ? (
        <>
          <Div>{children[1]}</Div>
        </>
      ) : width < 1400 ? (
        <>
          <Div>{children[1]}</Div>
          <Div>{children[2]}</Div>
        </>
      ) : (
        <>
          <Div>{children[0]}</Div>
          <Div>{children[1]}</Div>
          <Div>{children[2]}</Div>
        </>
      )}
    </main>
  );
}

export default Main;
