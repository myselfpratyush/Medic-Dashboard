import React from 'react'
import { navigationLinks } from '../data/Navigation';
import './Sidebar.css';

function Sidebar({isOpen}) {
  return (
    <div>
        <aside className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
      <div className="logo">Health<span className="dot">care.</span></div>
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
