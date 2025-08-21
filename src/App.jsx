import "./App.css";
import { BottomIconBar } from "./sections";
import { Home, Map, Profile, Settings } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> <BottomIconBar />
              </>
            }
          ></Route>
          <Route
            path="/map"
            element={
              <>
                <Map /> <BottomIconBar />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Profile /> <BottomIconBar />
              </>
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <>
                <Settings /> <BottomIconBar />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
