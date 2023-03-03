import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { selectWidth } from "../reducers/dimensionSlice";

function Div(props: PropsWithChildren) {
  return (
    <div className="w-min h-full flex flex-wrap justify-center items-start mx-3 rounded-3xl  overflow-x-hidden overflow-y-auto scrollbar  ">
      {props.children}
    </div>
  );
}

type Props = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

function render(props: Props, width: number) {
  const left = <Div>{props.left}</Div>;
  const center = <Div>{props.center}</Div>;
  const right = <Div>{props.right}</Div>;
  if (width < 800) {
    return <>{center}</>;
  } else if (width < 1300) {
    return (
      <>
        {center}
        {right}
      </>
    );
  } else {
    return (
      <>
        {left}
        {center}
        {right}
      </>
    );
  }
}

function Main(props: Props) {
  const width = useSelector(selectWidth);

  return (
    <main className="w-full h-[calc(100%-6.3rem)] my-5 flex justify-center items-center  rounded-3xl overflow-hidden">
      {render(props, width)}
    </main>
  );
}

export default Main;
