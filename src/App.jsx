import "./App.css";
import { BottomIconBar, TopInfoBar, MainContainer } from "./sections";
function App() {
  return (
    <div className="max-w-xs mx-auto bg-white h-screen border rounded-3xl shadow-lg flex flex-col justify-between">
      <div>
        <TopInfoBar />
        <MainContainer />
      </div>
      <BottomIconBar />
    </div>
  );
}

export default App;
