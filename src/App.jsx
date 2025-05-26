import React ,{ useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'


function App() {
  
const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="layout">
         <Sidebar isOpen={isSidebarOpen}/>
      <div className="content">
        <Header onToggleSidebar={toggleSidebar}/>
        <DashboardMainContent />
      </div>
    </div>
    </>
  )
}

export default App
