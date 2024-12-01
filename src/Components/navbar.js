import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/get-in-touch">Get In Touch</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
