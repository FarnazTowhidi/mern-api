import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/hotels/">Hotels</Link>
      &nbsp; | &nbsp;
      <Link to="/api2/">api2</Link>
    </nav>
  )
}

export default NavBar