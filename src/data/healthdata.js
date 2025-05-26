import heart from '../assets/heart.png'
import teeth from '../assets/teeth.jpg'
import bone from '../assets/bone.jpg'
export const healthCards = [
  {
    id: 1,
    image: heart,
    status: "Needs Attention",
    color: "#ef4444", // red
    date: "2025-05-18"
  },
  {
    id: 2,
    image: teeth,
    status: "Healthy",
    color: "#10b981", // green
    date: "2025-04-22"
  },
  {
    id: 3,
    image: bone,
    status: "Monitoring",
    color: "#f59e0b", // amber
    date: "2025-05-10"
  }
];
export const healthStatus = [
  {
    label: "Healthy Heart",
    status: "Good",
    color: "#10b981" // green
  },
  {
    label: "Lungs",
    status: "Alert",
    color: "#ef4444" // red
  },
  {
    label: "Teeth",
    status: "Good",
    color: "#3b82f6" // blue
  },
  {
    label: "Bone",
    status: "Monitor",
    color: "#facc15" // yellow
  }
];