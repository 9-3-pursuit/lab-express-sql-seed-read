// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import EditAlbum from "./Pages/EditAlbum";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewAlbum from "./Pages/NewAlbum";
import AlbumById from "./Pages/AlbumById";

// COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Index />} />
            <Route exact path="/albums/:albumId" element={<AlbumById/>} />
            <Route path="/albums/new" element={<NewAlbum />} />
            <Route path="/albums/:albumId/edit" element={<EditAlbum />} />
             <Route path="*" element={<FourOFour />} />  
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;