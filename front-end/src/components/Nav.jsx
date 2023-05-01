import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to={"/"}><h1>Tuner</h1></Link>
        <div>
            <Link to={"/songs"}>
                Veiw Songs
            </Link>
            <Link to={"/new"}>
                New Song
            </Link>
        </div>
    </nav>
  )
}

export default Nav