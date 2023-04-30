import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <h1><a href="/">Tuner</a></h1>
            <nav>
                <ul>
                    <li><Link to="/songs">Songs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar