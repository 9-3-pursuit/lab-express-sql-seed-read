// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./Components/Navbar";

// PAGES
import New from "./Pages/New";
import Index from "./Pages/Index";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import ContactUs from "./Components/ContactUs";
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/budgets/:index/edit" element={<Edit />} />
<Route path="/budgets/new" element={<New />} />
<Route path="/budgets/:index" element={<Show />} />
<Route path="/budgets" element={<Index />} />
<Route path="*" element={<FourOFour />} />

*/
