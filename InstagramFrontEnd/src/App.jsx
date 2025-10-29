import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage";
import Reels from "./Components/ReelPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </Router>
  );
}

export default App;