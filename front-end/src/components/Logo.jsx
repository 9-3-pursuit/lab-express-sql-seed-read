import tunerApp from '../Images/tunerApp.png'
import { Link } from 'react-router-dom'

const Logo = () => {

    return (
        <Link to='/'>
            <img src={tunerApp} alt='logo' />
            </Link>
    )
}

export default Logo

