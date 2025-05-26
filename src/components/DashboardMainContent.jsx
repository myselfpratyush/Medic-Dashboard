import React from "react";
import "./DashboardMainContent.css";
import AnatomySection from "./AnatomySection";
import CalenderView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

function DashboardMainContent() {
  return (
    <div className="dashboard-main">    
      <section className="middle-row">
        <AnatomySection />
        <CalenderView/>
      </section>
      <section className="bottom-row">
           <ActivityFeed/>
           <UpcomingSchedule/>
      </section>
    </div>
  );
}

export default DashboardMainContent;
