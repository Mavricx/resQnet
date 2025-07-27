import "./App.css";
import { BottomIconBar, TopInfoBar, MainContainer } from "./sections";
import EmergencyButton from "./components/EmergencyButton";
function App() {
  return (
    <div
      className="bg-white-100"
    >
      <TopInfoBar />
      <MainContainer />
      <BottomIconBar />
    </div>
  );
}

export default App;
