import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
    <h1>This is the Nav</h1>
    <Link to="/saved">Saved</Link>
    </div>
    
  )
}

export default Nav;