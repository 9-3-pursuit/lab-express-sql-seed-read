// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./Components/Navbar";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="bg-pink-50">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/songs/:id" element={<Show />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
              <Route path="/budgets/:index/edit" element={<Edit />} />
*/
