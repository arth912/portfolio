import React from 'react';
import { Github, ExternalLink, Code, ShoppingCart, Star, CreditCard, Home, FileSearch, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HomeState',
      description: 'Real estate management platform built with Django. Features property listings, search functionality, user authentication, and comprehensive property management system.',
      icon: <Home className="w-6 h-6" />,
      techStack: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Property listing and management',
        'Advanced search and filtering',
        'User authentication and profiles',
        'Responsive design for all devices',
        'Admin panel for property management'
      ],
      githubLink: 'https://github.com/arth912/HomeState',
      color: 'from-teal-500 to-teal-700'
    },
    {
      title: 'Toyota Parts Extraction',
      description: 'Automated web scraping tool for extracting Toyota standard parts information. Built with Python to parse and structure automotive parts data efficiently.',
      icon: <FileSearch className="w-6 h-6" />,
      techStack: ['Python', 'Requests', 'Selenium', 'Web Scraping'],
      features: [
        'Automated data extraction from web sources',
        'Structured data parsing and cleaning',
        'Export to CSV/Excel formats',
        'Error handling and retry logic',
        'Batch processing capabilities'
      ],
      githubLink: 'https://github.com/arth912/Toyota-Partname-Extraction---Standard-Parts',
      color: 'from-amber-500 to-amber-700'
    },
    {
      title: 'Digit Detection using YOLO8',
      description: 'Computer vision system for detecting and recognizing digits in automobile assembly images for Scania. Leverages YOLOv8 for real-time object detection and digit recognition.',
      icon: <Eye className="w-6 h-6" />,
      techStack: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Deep Learning'],
      features: [
        'Real-time digit detection in assembly images',
        'YOLOv8 model training and optimization',
        'High accuracy digit recognition',
        'Image preprocessing and augmentation',
        'Model deployment for production use'
      ],
      githubLink: 'https://github.com/arth912/Digit-Detection-using-YOLO8-for-automobile-assemblies-images-scania',
      color: 'from-violet-500 to-violet-700'
    },
    {
      title: 'Buyers.com',
      description: 'Full-featured e-commerce platform built with MERN stack. Includes product catalog, shopping cart, user authentication, order management, and payment integration.',
      icon: <ShoppingCart className="w-6 h-6" />,
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT'],
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart and checkout process',
        'Order tracking and management',
        'Admin dashboard for inventory'
      ],
      githubLink: 'https://github.com/arth912/buyers_com',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Astrology Reports',
      description: 'Dockerized astrology report generation system built with FastAPI. Creates personalized PDF astrology reports based on user details (name, birth date, birth place) using wkhtmltopdf for high-quality report rendering.',
      icon: <Star className="w-6 h-6" />,
      techStack: ['Python', 'FastAPI', 'Docker', 'JWT', 'wkhtmltopdf', 'Requests'],
      features: [
        'Dockerized Python microservices',
        'FastAPI with JWT authentication',
        'PDF report generation using wkhtmltopdf',
        'Personalized astrology calculations',
        'Scalable container-based deployment'
      ],
      githubLink: 'https://github.com/CodeXCommsSystems/AChosenSonReports',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Achosenson',
      description: 'Comprehensive astrology platform featuring personalized horoscopes, birth chart analysis, and consultation booking system with robust role-based access control.',
      icon: <Star className="w-6 h-6" />,
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'RBAC', 'JWT'],
      features: [
        'User profile and birth chart management',
        'Astrologer consultation booking',
        'Role-based access control (User, Astrologer, Admin)',
        'Real-time notifications',
        'Payment integration for consultations'
      ],
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'TinyBee.Toys',
      description: 'Specialized e-commerce platform for children\'s toys with age-appropriate categorization, wishlist features, and secure payment processing.',
      icon: <ShoppingCart className="w-6 h-6" />,
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'AWS S3'],
      features: [
        'Age-based product categorization',
        'Wishlist and favorites',
        'Secure payment gateway integration',
        'Product reviews and ratings',
        'Responsive mobile-first design'
      ],
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Payment Integration Module',
      description: 'Reusable payment gateway integration module supporting Razorpay with comprehensive error handling, webhook processing, and transaction management.',
      icon: <CreditCard className="w-6 h-6" />,
      techStack: ['Node.js', 'Express.js', 'Razorpay API', 'MongoDB', 'Webhooks'],
      features: [
        'Multiple payment method support',
        'Webhook handling for payment confirmations',
        'Transaction history and reporting',
        'Refund and cancellation processing',
        'Secure payment data handling'
      ],
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-primary-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.githubLink || "https://github.com/arth912"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/arth912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg"
          >
            <Code className="w-5 h-5" />
            <span>View More Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
