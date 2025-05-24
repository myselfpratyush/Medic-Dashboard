import React from 'react'
import './AnatomySection.css';
import { healthStatus } from '../data/healthdata';
import  anatomylogo from '../assets/human-body.jpg'

function AnatomySection() {
  return (
     <section className="anatomy-section">
      <img
        src={anatomylogo}
        alt="Anatomical Illustration"
        className="anatomy-image"
      />
      <div className="indicators">
        {healthStatus.map((item) => (
          <div key={item.label} className={`indicator ${item.status.toLowerCase()}`}>
            <span className="dot" style={{ backgroundColor: item.color }}></span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AnatomySection