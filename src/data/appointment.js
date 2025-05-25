export const calendarDays = [
  { date: "01" }, { date: "02" }, { date: "03" }, { date: "04" },
  { date: "05" }, { date: "06" }, { date: "07" },
  { date: "08" }, { date: "09" }, { date: "10" }, { date: "11" },
  { date: "12" }, { date: "13" }, { date: "14" },
  { date: "15" }, { date: "16" }, { date: "17" }, { date: "18" },
  { date: "19" }, { date: "20" }, { date: "21" },
  { date: "22" }, { date: "23" }, { date: "24" }, { date: "25" },
  { date: "26" }, { date: "27" }, { date: "28" }, { date: "29" }, { date: "30" }, { date: "31" },
];

export const calendarAppointments = {
  "05": ["09:00", "13:00"],
  "10": ["11:00"],
  "15": ["15:00"],
  "22": ["10:00", "14:00"]
};

export const appointmentCards = [
  {
    id: 1,
    title: "Dentist Appointment",
    time: "Oct 10, 2021 - 11:00 AM"
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    time: "Oct 15, 2021 - 3:00 PM"
  }
];

import { Stethoscope, Eye, HeartPulse, Brain } from 'lucide-react';


export const upcomingAppointments = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health Checkup Complete", time: "09:00 AM", icon: Stethoscope },
      { title: "Ophthalmologist", time: "11:00 AM", icon: Eye }
    ]
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "10:30 AM", icon: HeartPulse },
      { title: "Neurologist", time: "02:00 PM", icon: Brain }
    ]
  }
];