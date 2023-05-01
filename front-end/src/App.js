// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="h-full w-full bg-light">
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="/songs/:id" element={<Show />} />
        <Route path="/songs/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
