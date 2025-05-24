import React from 'react'
import { calendarDays, calendarAppointments, appointmentCards } from '../data/appointment';
import './CalenderView.css';

const CalenderView = () => {
  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <h2>October 2021</h2>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day) => (
          <div key={day.date} className="calendar-cell">
            <span className="date">{day.date}</span>
            <div className="slots">
              {calendarAppointments[day.date]?.map((time, index) => (
                <span key={index} className="slot">{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((appt) => (
          <div key={appt.id} className="appointment-card">
            <h4>{appt.title}</h4>
            <p>{appt.time}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CalenderView