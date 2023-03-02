import { Home } from "./pages";
import { useSelector } from "react-redux";
import { selectTheme } from "./reducers/themeSlice";

function App() {
  const theme = useSelector(selectTheme);

  theme
    ? document.getElementsByTagName("html")[0].classList.add("dark")
    : document.getElementsByTagName("html")[0].classList.remove("dark");

  return (
    <div className="dark:bg-primaryDark/90 bg-blue-100/80 w-full min-h-screen p-5 ">
      <Home />
    </div>
  );
}

export default App;
