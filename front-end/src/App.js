import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/songs" element={<Index />} />
      <Route path="/songs/new" element={<New />} />
      <Route path="/songs/:id" element={<Show />} />
      <Route path="/songs/:id/edit" element={<Edit />} />
    </Routes>
  </Router>
);
}

export default App;