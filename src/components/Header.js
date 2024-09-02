import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ email }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <img src="/hid-logo.png" alt="App Logo" className="app-logo" />
          <h1 className="app-title">Community Of Practice - Internet Of Things</h1>
        </div>
        <div className="header-right">
          <div className="email-display">
            Welcome, {email}
          </div>
          <nav className="header-menu">
            <Link to="/leaderboard" className="menu-link">Leaderboard</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
