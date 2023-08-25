import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>  
        <Link to="/jobs">Jobs</Link>
    </nav>
  );
}

export default Navigation;
