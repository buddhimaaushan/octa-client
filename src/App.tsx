import { useEffect } from "react";
import { Home } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { getWidth, getHeight } from "./reducers/dimensionSlice";
import { selectTheme } from "./reducers/themeSlice";

function App() {
  const theme = useSelector(selectTheme);

  theme
    ? document.getElementsByTagName("html")[0].classList.add("dark")
    : document.getElementsByTagName("html")[0].classList.remove("dark");

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(getWidth());
      dispatch(getHeight());
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="dark:bg-primaryDark/90 bg-blue-100/80 w-full h-screen p-5 overflow-hidden">
      <Home />
    </div>
  );
}

export default App;
