import React from 'react';
import Link from "react-router-dom/Link";
import "./styles/NavBar.css";

export const NavBar = () => {
    return (
      <nav className="nav-bar">
        <Link className="title" to='#'>ADHD Playback Tool</Link>
        <Link to='/home'>Home</Link>
        <Link to='/more'>More Information</Link>
      </nav>
    );
}