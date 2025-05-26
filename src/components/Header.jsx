import React from 'react'
import { Bell, Plus } from 'lucide-react';
import './Header.css';
function Header({onToggleSidebar}) {
  return (
    <div>
   <header className="header">
       <button className="hamburger" onClick={onToggleSidebar}>
        ☰
      </button>
      <div className="search">
        <input type="search" placeholder="Search..."  />
      </div>
      <div className="header-icons">
        <Bell size={20} className="bell-icon" />
        <div className="profile">
          <img src="src\assets\836.jpg" alt="User"  />
        </div>
        <button className="add-btn"><Plus size={20} /></button>
      </div>
    </header>

    </div>
  )
}

export default Header