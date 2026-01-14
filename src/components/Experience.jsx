import React from 'react';
import { Briefcase, Calendar, Trophy, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'Gateway Group of Companies (AutoDAP)',
    role: 'Full Stack Developer',
    duration: 'Dec 2021 – Present',
    location: 'Remote',
    achievements: [
      {
        title: 'VIN-based DaaS APIs (VISOEA)',
        points: [
          'Developed comprehensive vehicle data APIs using Node.js and LoopBack 4 (TypeScript)',
          'Implemented robust backend services handling thousands of vehicle identification requests',
          'Architected scalable microservices architecture for data-as-a-service platform'
        ]
      },
      {
        title: 'Database & Performance Optimization',
        points: [
          'Optimized MySQL queries resulting in 40% improvement in response times',
          'Implemented Redis caching strategies reducing database load by 60%',
          'Designed efficient database schemas for high-volume data operations'
        ]
      },
      {
        title: 'Frontend Integration',
        points: [
          'Built responsive React.js user interfaces for data visualization',
          'Integrated RESTful APIs with frontend applications',
          'Implemented real-time data updates using WebSocket connections'
        ]
      },
      {
        title: 'Security & Authentication',
        points: [
          'Implemented JWT-based authentication system',
          'Developed Role-Based Access Control (RBAC) for multi-tenant applications',
          'Ensured secure API endpoints with proper validation and authorization'
        ]
      }
    ],
    award: {
      title: 'Champion Award',
      description: 'Recognized for exceptional performance and outstanding contributions to the AutoDAP platform'
    }
  };

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        {/* Company Card */}
        <div className="card p-8 mb-8">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.role}
                </h3>
                <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {experience.company}
                </p>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Award Badge */}
          <div className="mb-8 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-1">
                  {experience.award.title}
                </h4>
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  {experience.award.description}
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {experience.achievements.map((achievement, index) => (
              <div key={index} className="border-l-2 border-primary-200 dark:border-primary-800 pl-6 pb-6 last:pb-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {achievement.title}
                </h4>
                <ul className="space-y-2">
                  {achievement.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Years of Experience Highlight */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full shadow-lg">
            <div className="text-4xl font-bold">3+</div>
            <div className="text-left">
              <div className="font-semibold">Years of</div>
              <div className="text-sm opacity-90">Professional Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
