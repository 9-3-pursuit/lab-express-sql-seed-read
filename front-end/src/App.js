import {Route, BrowserRouter, Routes} from "react-router-dom"
import Home from "./components/Home.jsx"
import Index from "./components/Index.jsx"
import Show from "./components/Show.jsx"
import Edit from "./components/Edit.jsx"
import New from "./components/New.jsx"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/songs" element={<Index/>}/>
      <Route path="/songs/new" element={<New/>}/>
      <Route path="/songs/:id" element={<Show/>}/>
      <Route path="/songs/:id/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
