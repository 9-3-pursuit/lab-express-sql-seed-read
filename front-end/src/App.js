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
import Aside from "./Components/Aside";

function App() {
  return (
    <div className="h-full w-full  min-h-screen flex flex-col">
      <Router>
        <Header className="w-full" />
        <div className="flex flex-grow">
          <NavBar className="w-1/4 flex-shrink-0" />
          <Routes className="flex-grow-1">
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Aside className="w-1/4 flex-shrink-0" />
        </div>
        <Footer className="w-full" />
      </Router>
    </div>
  );
}

export default App;
