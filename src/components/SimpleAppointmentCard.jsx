import React from 'react'
import { CalendarCheck } from 'lucide-react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({title , time , icon:Icon}) {
  return (
    <div className="simple-card">
      <div className="card-icon">
        {Icon ? <Icon size={18} /> : <CalendarCheck size={18} />}
      </div>
      <div className="card-info">
        <span className="title">{title}</span>
        <span className="time">{time}</span>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard