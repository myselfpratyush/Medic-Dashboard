// export const navigationLinks = [
//   "Dashboard", "History", "Calendar", "Appointments", "Statistics",
//   "Tests", "Chat", "Support", "Setting"
// ];
import { MdSpaceDashboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { RiFolderAddFill } from "react-icons/ri";

export const navigationLinks = [
 {
   key:'dashboard',
   label:'Dashboard',
   icon: <MdSpaceDashboard />

 },
 {
   key:'history',
   label:'History',
   icon:<MdHistory />

 },
 {
   key:'calender',
   label:'Calender',
   icon:<IoCalendarNumber />

 },
 {
   key:'appointments',
   label:'Appointments',
   icon:<RiFolderAddFill />

 },
 {
   key:'staticstic',
   label:'Staticstics',
   icon:<BsFillFileEarmarkBarGraphFill />

 },
];

