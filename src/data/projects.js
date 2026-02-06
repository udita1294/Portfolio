import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

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
    year: "2024",
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
  }
];

export default projects;