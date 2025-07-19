# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create 50 projects with credible names and descriptions
projects_data = [
  {
    name: "E-commerce Platform",
    description: "A full-featured online marketplace with payment integration, inventory management, and user authentication. Built with modern web technologies for scalability and performance."
  },
  {
    name: "Task Management System",
    description: "An intuitive project management tool designed to help teams organize tasks, track progress, and collaborate effectively. Features include kanban boards, time tracking, and reporting."
  },
  {
    name: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for managing multiple social media accounts. Includes post scheduling, engagement tracking, and audience insights across all major platforms."
  },
  {
    name: "Learning Management System",
    description: "An educational platform that allows instructors to create courses, manage student progress, and deliver content through various multimedia formats. Perfect for online education."
  },
  {
    name: "Restaurant Point of Sale",
    description: "A modern POS system specifically designed for restaurants and food service businesses. Features table management, order tracking, and kitchen display integration."
  },
  {
    name: "Inventory Management Pro",
    description: "A robust inventory tracking system for businesses of all sizes. Includes barcode scanning, stock alerts, supplier management, and detailed reporting capabilities."
  },
  {
    name: "Customer Support Portal",
    description: "A comprehensive help desk solution with ticket management, knowledge base, live chat, and customer satisfaction tracking. Streamlines support operations."
  },
  {
    name: "Real Estate CRM",
    description: "A specialized customer relationship management system for real estate professionals. Includes lead tracking, property management, and automated follow-up sequences."
  },
  {
    name: "Healthcare Management System",
    description: "A HIPAA-compliant platform for managing patient records, appointment scheduling, and billing. Designed specifically for medical practices and healthcare providers."
  },
  {
    name: "Event Planning Platform",
    description: "An all-in-one event management solution featuring registration, ticketing, vendor coordination, and attendee communication tools. Perfect for conferences and corporate events."
  },
  {
    name: "Financial Portfolio Tracker",
    description: "A sophisticated investment tracking application with real-time market data, portfolio analysis, and performance reporting. Helps investors make informed decisions."
  },
  {
    name: "Fitness Coaching App",
    description: "A personal training platform that connects fitness coaches with clients. Features workout planning, progress tracking, nutrition guidance, and video consultations."
  },
  {
    name: "Travel Booking Engine",
    description: "A comprehensive travel booking system with flight, hotel, and car rental integration. Includes itinerary management and customer review features."
  },
  {
    name: "Content Management System",
    description: "A flexible CMS for managing websites and digital content. Features drag-and-drop editing, SEO optimization, and multi-language support for global reach."
  },
  {
    name: "Supply Chain Optimizer",
    description: "An advanced logistics platform that optimizes supply chain operations through predictive analytics, route planning, and vendor performance tracking."
  },
  {
    name: "Human Resources Platform",
    description: "A comprehensive HR management system covering recruitment, employee onboarding, performance reviews, and payroll processing. Streamlines HR operations."
  },
  {
    name: "Video Conference Solution",
    description: "A secure video conferencing platform with screen sharing, recording capabilities, and integration with popular productivity tools. Perfect for remote teams."
  },
  {
    name: "Blockchain Wallet",
    description: "A secure cryptocurrency wallet with multi-currency support, transaction tracking, and advanced security features. Designed for both beginners and experienced users."
  },
  {
    name: "IoT Device Manager",
    description: "A centralized platform for managing Internet of Things devices, monitoring sensor data, and automating responses based on real-time conditions."
  },
  {
    name: "Music Streaming Service",
    description: "A digital music platform with personalized playlists, offline listening, and social sharing features. Includes artist discovery and recommendation algorithms."
  },
  {
    name: "Property Management Suite",
    description: "A comprehensive solution for property managers handling rental properties, tenant communications, maintenance requests, and financial reporting."
  },
  {
    name: "Online Learning Platform",
    description: "An interactive e-learning environment with video lessons, quizzes, progress tracking, and certification programs. Supports multiple learning styles."
  },
  {
    name: "Marketing Automation Tool",
    description: "A powerful marketing platform with email campaigns, lead scoring, customer segmentation, and analytics. Helps businesses nurture leads and convert customers."
  },
  {
    name: "Fleet Management System",
    description: "A vehicle tracking and management solution with GPS monitoring, maintenance scheduling, fuel tracking, and driver performance analytics."
  },
  {
    name: "Appointment Scheduling App",
    description: "A user-friendly booking system for service-based businesses. Features calendar integration, automated reminders, and payment processing capabilities."
  },
  {
    name: "Document Management System",
    description: "A secure digital document storage and collaboration platform with version control, access permissions, and search functionality for businesses."
  },
  {
    name: "Survey and Analytics Platform",
    description: "A comprehensive survey tool with customizable questionnaires, real-time analytics, and detailed reporting. Perfect for market research and feedback collection."
  },
  {
    name: "Cryptocurrency Exchange",
    description: "A secure trading platform for digital currencies with advanced charting tools, order management, and compliance features for regulatory requirements."
  },
  {
    name: "Recipe Management App",
    description: "A culinary application for organizing recipes, meal planning, grocery list generation, and nutrition tracking. Includes cooking timers and video tutorials."
  },
  {
    name: "Project Budget Tracker",
    description: "A financial management tool specifically designed for tracking project expenses, budget allocation, and cost analysis with detailed reporting capabilities."
  },
  {
    name: "Delivery Tracking System",
    description: "A logistics platform for managing deliveries with real-time tracking, route optimization, and customer notification features for shipping companies."
  },
  {
    name: "Digital Library Platform",
    description: "An online library system with book cataloging, user management, reservation systems, and digital lending capabilities for educational institutions."
  },
  {
    name: "Gaming Tournament Platform",
    description: "An esports platform for organizing gaming tournaments, bracket management, live streaming integration, and prize distribution systems."
  },
  {
    name: "Medical Records System",
    description: "A secure electronic health record system with patient data management, prescription tracking, and integration with medical devices and labs."
  },
  {
    name: "Freelancer Management Platform",
    description: "A comprehensive platform connecting businesses with freelancers, featuring project posting, skill matching, time tracking, and secure payment processing."
  },
  {
    name: "Smart Home Controller",
    description: "A centralized home automation system for controlling smart devices, monitoring energy usage, and creating automated routines for enhanced living."
  },
  {
    name: "Volunteer Management System",
    description: "A platform for non-profit organizations to manage volunteers, schedule events, track hours, and communicate with their volunteer community."
  },
  {
    name: "Job Board Platform",
    description: "A career platform connecting job seekers with employers, featuring resume building, application tracking, and skill assessment tools."
  },
  {
    name: "Subscription Management Service",
    description: "A comprehensive billing platform for managing recurring subscriptions, payment processing, customer retention, and revenue analytics."
  },
  {
    name: "Quality Assurance Dashboard",
    description: "A testing and quality management platform with bug tracking, test case management, and automated testing integration for software development teams."
  },
  {
    name: "Weather Monitoring System",
    description: "An environmental monitoring platform with weather station integration, data visualization, and predictive analytics for agricultural and research applications."
  },
  {
    name: "Parking Management System",
    description: "A smart parking solution with space monitoring, reservation capabilities, payment processing, and mobile app integration for urban parking management."
  },
  {
    name: "Language Learning App",
    description: "An interactive language learning platform with gamified lessons, speech recognition, progress tracking, and cultural immersion features."
  },
  {
    name: "Asset Management Platform",
    description: "A comprehensive asset tracking system for businesses to manage equipment, track depreciation, schedule maintenance, and optimize resource allocation."
  },
  {
    name: "Virtual Reality Training",
    description: "An immersive VR training platform for professional development, safety training, and skill assessment in various industries and applications."
  },
  {
    name: "Marketplace Analytics Tool",
    description: "A business intelligence platform for e-commerce sellers with sales analytics, competitor tracking, and market trend analysis across multiple platforms."
  },
  {
    name: "Telemedicine Platform",
    description: "A healthcare platform enabling remote consultations, prescription management, patient monitoring, and secure medical communication between providers and patients."
  },
  {
    name: "Energy Management System",
    description: "A smart energy monitoring platform for buildings and facilities with consumption tracking, optimization recommendations, and sustainability reporting."
  },
  {
    name: "Crowdfunding Platform",
    description: "A comprehensive crowdfunding solution with project creation tools, payment processing, backer management, and social sharing features for fundraising campaigns."
  },
  {
    name: "Digital Signage Manager",
    description: "A content management system for digital displays with remote content updates, scheduling, and analytics for retail and corporate environments."
  }
]

# Create projects using find_or_create_by to avoid duplicates
projects_data.each do |project_data|
  Project.find_or_create_by(name: project_data[:name]) do |project|
    project.description = project_data[:description]
  end
end

puts "Created #{Project.count} projects in the database"
