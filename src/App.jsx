import "./App.css";
import EmergencyButton from "./components/EmergencyButton.jsx";
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold flex justify-center items-center bg-grey-100">
        DAY ONE to ONE DAY
      </h1>
      <EmergencyButton />
    </div>
  );
}

export default App;
