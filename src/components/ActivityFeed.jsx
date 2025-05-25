    import React from 'react'
    import './ActivityFeed.css';
    
    function ActivityFeed() {
        const activityData = [3, 1, 2, 4, 0, 3, 2]; // Mock values per day
      return (
        <section className="activity-feed">
      <h2>Activity</h2>
      <p className="summary">3 appointments this week</p>

      <div className="bar-chart">
        {activityData.map((value, index) => (
          <div key={index} className="bar-wrapper">
            <div className="bar" style={{ height: `${value * 15}px` }}></div>
            <span className="bar-label">Day {index + 1}</span>
          </div>
        ))}
      </div>
    </section>
      )
    }
    
    export default ActivityFeed