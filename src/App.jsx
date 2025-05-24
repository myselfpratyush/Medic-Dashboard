import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'


function App() {
  

  return (
    <>
      <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
    </>
  )
}

export default App
