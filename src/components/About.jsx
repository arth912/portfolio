import React from 'react';
import { Code2, Server, Database, Cloud, Award, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Expert',
      description: 'Specialized in building scalable REST APIs and microservices with Node.js'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'MERN Stack',
      description: 'Full-stack expertise with MongoDB, Express, React, and Node.js'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Optimization',
      description: 'Proficient in MySQL, PostgreSQL, MongoDB with Redis caching strategies'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Deployment',
      description: 'Experience with AWS services (EC2, S3, Lambda, RDS) and Docker'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Focus on high-performance systems with caching and optimization'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'Champion Award recipient at AutoDAP for exceptional contributions'
    },
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      
      <div className="max-w-4xl mx-auto">
        {/* Main Description */}
        <div className="card p-8 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate <span className="font-semibold text-primary-600 dark:text-primary-400">Full Stack Developer</span> with over{' '}
              <span className="font-semibold">3 years of professional experience</span> specializing in building robust, scalable backend systems 
              and modern web applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Currently working at <span className="font-semibold">Gateway Group of Companies (AutoDAP)</span>, I've successfully developed 
              VIN-based DaaS APIs and enterprise-level solutions that serve thousands of users. My expertise lies in creating 
              high-performance backend services using <span className="font-semibold">Node.js, TypeScript, and LoopBack 4</span>, 
              along with Python frameworks like <span className="font-semibold">Django and FastAPI</span>. I excel in database optimization, 
              implementing efficient caching strategies, and deploying scalable solutions to the cloud.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code and constantly learning new technologies to deliver 
              innovative solutions. My recent achievement includes receiving the <span className="font-semibold text-primary-600 dark:text-primary-400">Champion Award</span> for 
              outstanding performance and contributions to the team.
            </p>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
