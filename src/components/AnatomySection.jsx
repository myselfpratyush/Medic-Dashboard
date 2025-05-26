import React from 'react'
import './AnatomySection.css';
import { healthStatus } from '../data/healthdata';
import  anatomylogo from '../assets/human-body.jpg'
import HealthStatusCard from './HealthStatusCard';

function AnatomySection() {
  return (
     <section className="anatomy-section">
      <img
        src={anatomylogo}
        alt="Anatomical Illustration"
        className="anatomy-image"
      />
      <div className="indicators">
        <HealthStatusCard/>
      </div>
    </section>
  )
}

export default AnatomySection