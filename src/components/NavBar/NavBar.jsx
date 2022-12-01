import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>

      &nbsp; | &nbsp;
      <Link to="/hotels/">Hotels</Link>
      &nbsp; | &nbsp;
      <Link to="/chat/">Chat with us</Link>
    </nav>
  )
}

export default NavBar