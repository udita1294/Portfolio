import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const projects = [
  {
    name: "Plate Forward",
    subtitle: "Surplus Food Donation Platform",
    description: "Advanced MERN-based Food Redistribution Platform with ML-powered Decision Support.",
    year: "2025",
    image: project1,
    link: "https://plate-forward-one.vercel.app",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "FastAPI", "Scikit-learn"],
    features: [
      "Full-stack MERN application connecting food donors, receivers, volunteers, and admins",
      "Machine Learning models for enhanced decision-making and reduced food wastage",
      "JWT-based authentication with role-based access control",
      "Interactive maps using Leaflet for donor location visualization",
      "Real-time notifications using Socket.IO",
      "Admin analytics dashboard for monitoring donations and user activity",
      "Image upload functionality using Multer and Cloudinary"
    ]
  },
  {
    name: "Restaurant Management Application",
    subtitle: "Full-Stack MERN Application",
    description: "Complete restaurant management web application with separate user and admin interfaces.",
    year: "2025",
    image: project2,
    link: "https://restaurant-app-i9xw.onrender.com",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "Full-stack MERN stack implementation",
      "JWT-based authentication system with role-based access control",
      "Admin Dashboard with CRUD operations for dish management",
      "Real-time order monitoring",
      "Separate user and admin interfaces"
    ]
  },
  {
  name: "Chat Application",
  subtitle: "Real-Time Communication Web App",
  description: "A full-stack chat application that enables users to communicate in real time through a clean and responsive interface, supporting seamless message exchange and user interactions.",
  year: "2025",
  image: project4,
  link: "https://github.com/udita1294/Chat_App",
  technologies: ["Express.js", "React.js", "Node.js", "Socket.IO"],
  features: [
    "Real-time messaging using WebSockets (Socket.IO)",
    "User-friendly chat interface built with React",
    "Backend APIs for message handling and user management",
    "Persistent chat storage using MongoDB",
    "Scalable MERN architecture suitable for multi-user communication"
  ]
},
  {
  name: "Gemini Clone",
  subtitle: "Responsive AI-Style Chatbot UI",
  description: "A responsive and interactive Gemini-style AI chatbot clone built with React that features a smooth conversational UI and can be extended to integrate real AI APIs for dynamic responses.",
  year: "2024",
  image: project3,
  link: "https://gemini-clone-tan-eight.vercel.app",
  technologies: ["React", "React Router", "TailwindCSS", "JavaScript"],
  features: [
    "Clean and responsive chat interface inspired by modern AI assistants",
    "Smooth typing animation for realistic conversational feel",
    "Simulated AI responses with structure ready for real API integration",
    "Built with reusable React components and state management",
    "Easily extendable to hook up actual AI services (e.g., OpenAI or Gemini APIs)"
  ]
}
];

export default projects;