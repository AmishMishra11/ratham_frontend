import { Route, Routes } from "react-router-dom";
import "./App.css";
import Enrollment from "./Components/Enrollment";
import ChatbotPage from "./Components/ChatbotPage";
import Exit from "./Components/Exit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Enrollment />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </div>
  );
}

export default App;
