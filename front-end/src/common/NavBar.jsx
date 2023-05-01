import BackButton from "../components/BackButton"
import ViewAllSongsButton from "../components/ViewAllSongsButton"
import MyFavoritesButton from "../components/MyFavoritesButton"
import NewSongButton from "../components/NewSongButton"

import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <BackButton className='nav-button' />
            <ViewAllSongsButton className='nav-button'/>
            <MyFavoritesButton className='nav-button' />
            <NewSongButton className='nav-button'/>
        </div>
    )
}

export default NavBar