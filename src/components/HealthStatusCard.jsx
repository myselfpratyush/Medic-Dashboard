import React from "react";
import { healthCards } from "../data/healthdata";
import "./HealthStatusCard.css";

function HealthStatusCard() {
  return (
    <div className="health-cards">
      {healthCards.map((card) => (
        <div key={card.id} className="health-card">
          <div className="card-header">
            <img src={card.image} alt="Dentist"  />
            <span className="card-status" style={{ color: card.color }}>
              {card.status}
            </span>
          </div>
          <div className="health-status-bar">
            <div
              className="status-bar-fill"
              style={{ backgroundColor: card.color }}
            ></div>
          </div>
          <div className="card-footer">
            <span className="card-date-label">{card.date}</span>
          </div>
        </div>
      ))}
      <a className="health-details-link">Details &gt;</a>
    </div>
  );
}

export default HealthStatusCard;
