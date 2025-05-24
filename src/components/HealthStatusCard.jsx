import React from 'react'
import { healthCards } from '../data/healthdata';
import './HealthStatusCard.css'

function HealthStatusCard() {
  return (
     <div className="health-cards">
      {healthCards.map((card) => (
        <div key={card.id} className="health-card">
          <div className="card-header">
            <span className="card-title">{card.title}</span>
            <span className="card-status" style={{ color: card.color }}>{card.status}</span>
          </div>
          <div className="card-footer">
            <span className="label">Last Checkup:</span>
            <span className="date">{card.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCard