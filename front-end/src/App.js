import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './common/NavBar'
import Home from "./pages/Home";
import EditSong from './pages/EditSong'
import GetAllSongs from './pages/GetAllSongs'
import GetOneSong from './pages/GetOneSong'
// import Footer from './common/Footer'
import NewSong from "./pages/NewSong";
import MyFavorites from "./pages/MyFavorites";
import Error from "./pages/Error";
import Logo from "./components/Logo";
import './App.css'


//create a playlist if is favorite
//allow users to add reviews on individual songs
//create 404 error page

function App() {

  return (
    <div className="background-container">
      
      <BrowserRouter>
        <Logo/>
        <NavBar/> 
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<EditSong />} path='/songs/edit/:id' />
          <Route element={<GetAllSongs/>} path='/songs' />
          <Route element={<GetOneSong />} path='/songs/:id' />
          <Route element={<NewSong />} path='/songs/new' />
          <Route element={<MyFavorites />} path='/songs/my-favorites/' />
          <Route element={<Error/>} path='/*'/> 
        </Routes>
        {/* <Footer/>  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
