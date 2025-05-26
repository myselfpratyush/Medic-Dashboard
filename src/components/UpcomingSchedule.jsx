import React from 'react'
import { upcomingAppointments } from '../data/appointment';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css'
function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      <div className='appointment-list'>
      {upcomingAppointments.map((group) => (
        <div key={group.day} className="appointment-group">
          <h4>{group.day}</h4>
          {group.appointments.map((appt, index) => (
            <SimpleAppointmentCard key={index} title={appt.title} time={appt.time} icon={appt.icon} />
          ))}
        </div>
      ))}
      </div>
    </section>
  )
}

export default UpcomingSchedule