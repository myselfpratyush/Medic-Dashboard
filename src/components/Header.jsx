import React from 'react'
import { Bell, Plus } from 'lucide-react';
import './Header.css';
function Header() {
  return (
    <div>
   <header className="header">
      
      <div className="search">
        <input type="text" placeholder="Search..." readOnly />
      </div>
      <div className="header-icons">
        <Bell size={20} className="bell-icon" />
        <div className="profile">
          <img src="/assets/avatar.png" alt="User" />
          <span>Dr. Jane Doe</span>
        </div>
        <button className="add-btn"><Plus size={20} /></button>
      </div>
    </header>

    </div>
  )
}

export default Header