import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";


import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/songs" element={<Index/>} />
      <Route path="/songs/new" element={<New />} />
      <Route path="/songs/:id" element={<Show />} />


      </Routes>

      </Router>
    </div>
  );
}

export default App;
