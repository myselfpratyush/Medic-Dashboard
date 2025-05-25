import React from 'react'
import { navigationLinks } from '../data/Navigation';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
        <aside className="sidebar">
      <div className="logo">Healthcare<span className="dot">.</span></div>
      <ul className="nav-list">
        {navigationLinks.map((item) => (
          <li key={item.key}>
            <span>{item.icon}</span>
            <a href="#">{item.label}</a></li>
        ))}
      </ul>
    </aside>

    </div>
  )
}

export default Sidebar
