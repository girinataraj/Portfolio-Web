import { NextResponse } from "next/server"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "TurfZone Booking",
    description: "Live production website for sports turf reservations, payments, and slot management.",
    longDescription:
      "A comprehensive sports facility booking platform built with the MERN stack. Features real-time slot availability, secure payment processing with Stripe integration, user management system, and comprehensive admin dashboard for facility owners. The platform handles complex booking logic, automated notifications, and provides detailed analytics. Currently deployed and actively serving customers with seamless booking experiences.",
    image: "/sports-turf-booking-website-dashboard.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io", "JWT", "Tailwind CSS"],
    liveUrl: "https://turrfzone.com/",
    githubUrl: "https://github.com/girinataraj/turfzone-booking",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Gym Management System",
    description: "MERN application for gym membership management, scheduling, and payments.",
    longDescription:
      "Complete gym management solution featuring member registration and profile management, subscription tracking with automated renewals, class scheduling system, trainer management portal, and integrated payment processing with Razorpay. Includes mobile-responsive design, real-time notifications for class updates, comprehensive reporting dashboard, and role-based access control for different user types.",
    image: "/gym-management-system-dashboard.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Razorpay", "Material-UI", "Chart.js"],
    githubUrl: "https://github.com/girinataraj/gym-management",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "3",
    title: "Quiz Web App",
    description: "Real-time quiz platform with timer, admin panel, and analytics using Node.js, Express, and MongoDB.",
    longDescription:
      "Interactive quiz application with real-time scoring system, customizable question sets with multiple question types, timer functionality with automatic submission, comprehensive analytics dashboard showing performance metrics, and admin panel for quiz creation and management. Features include user authentication, leaderboards, detailed performance tracking, and responsive design for seamless experience across devices.",
    image: "/quiz-application-interface-with-timer.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Chart.js", "JWT", "Bootstrap"],
    githubUrl: "https://github.com/girinataraj/quiz-app",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "4",
    title: "Smart Inventory Dashboard",
    description: "React + .NET backend with role-based authentication and analytics.",
    longDescription:
      "Enterprise-level inventory management system with role-based access control, real-time stock tracking with barcode scanning, automated reorder alerts and purchase order generation, comprehensive reporting dashboard with advanced analytics, supplier management, and multi-location inventory tracking. Built with React frontend and .NET Core backend, featuring Entity Framework for data management and JWT authentication.",
    image: "/inventory-dashboard-charts.png",
    technologies: ["React", ".NET Core", "SQL Server", "Entity Framework", "JWT", "Chart.js", "Bootstrap", "SignalR"],
    githubUrl: "https://github.com/girinataraj/inventory-dashboard",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "5",
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, payments, and admin dashboard.",
    longDescription:
      "Modern e-commerce platform with product catalog management, shopping cart functionality, secure checkout process with multiple payment options, order tracking system, customer reviews and ratings, inventory management, and comprehensive admin dashboard. Features include search and filtering, wishlist functionality, email notifications, and responsive design optimized for mobile commerce.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS", "NextAuth.js"],
    githubUrl: "https://github.com/girinataraj/ecommerce-platform",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "6",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates.",
    longDescription:
      "Comprehensive task management application with project organization, team collaboration features, real-time updates using WebSocket, task assignment and tracking, deadline management with notifications, file attachments, comment system, and progress visualization. Includes Kanban board view, calendar integration, time tracking, and detailed project analytics.",
    image: "/task-management-kanban.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Express", "JWT", "Material-UI"],
    githubUrl: "https://github.com/girinataraj/task-management",
    featured: false,
    category: "Full Stack",
  },
]

export async function GET() {
  try {
    return NextResponse.json({ projects })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
