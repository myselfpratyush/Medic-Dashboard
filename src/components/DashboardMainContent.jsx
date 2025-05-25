import React from "react";
import "./DashboardMainContent.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCard from './HealthStatusCard'; 
import CalenderView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <h1>Main Dashboard Section</h1>
      
      <section className="middle-row">
        <AnatomySection />
         <HealthStatusCard/>
      </section>
      <section className="bottom-row">
        <CalenderView/>
        <div className="side-widgets">
           <UpcomingSchedule/>
           <ActivityFeed/>
        </div>
      </section>
    </div>
  );
}

export default DashboardMainContent;
