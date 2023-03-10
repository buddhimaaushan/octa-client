import { useEffect } from "react";
import { Home } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { getWidth, getHeight } from "./reducers/dimensionSlice";
import { selectTheme } from "./reducers/themeSlice";
import { Route, Routes } from "react-router-dom";
import {
  Timeline,
  Trending,
  Popular,
  Favourite,
  Saved,
  NewsFeed,
} from "./templates";

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
    <div className="dark:bg-primaryDark/90 bg-blue-100/90 w-full h-screen p-5 overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<NewsFeed />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="trending" element={<Trending />} />
          <Route path="popular" element={<Popular />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="saved" element={<Saved />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
