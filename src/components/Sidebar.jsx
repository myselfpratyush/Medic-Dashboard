import React from 'react'
import { navigationLinks } from '../data/Navigation';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
        <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-list">
        {navigationLinks.map((link, index) => (
          <li key={index}><a href="#">{link}</a></li>
        ))}
      </ul>
    </aside>

    </div>
  )
}

export default Sidebar
