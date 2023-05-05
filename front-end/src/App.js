import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//pages 
import Home from "./Pages /Home";
import Show from "./Pages /Show";
import Edit from "./Pages /Edit";
import Index from "./Pages /Index";
import New from "./Pages /New";
import FourOfFour from "./Pages /FourOfFour";

//Components
import NavBar from './Components/NavBar'

function App() {
  return (
  <div className="tunerApp">
    <Router>
    <NavBar/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/songs' element={<Index/>}/>
        <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOfFour />} />
      </Routes>
    </main>
    </Router>
      
    </div>
  );
}

export default App;
