import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Programming',
      description: 'Comprehensive Python programming course covering fundamentals, data structures, and advanced concepts',
      skills: ['Python Basics', 'Data Structures', 'OOP', 'File Handling']
    },
    {
      title: 'Web Development',
      description: 'Full-stack web development certification covering HTML, CSS, JavaScript, and modern frameworks',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web APIs']
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with focus on relational and NoSQL databases',
      skills: ['SQL', 'Database Design', 'Optimization', 'NoSQL', 'Query Performance']
    },
    {
      title: 'PHP Development',
      description: 'Server-side programming with PHP including database integration and web application development',
      skills: ['PHP Basics', 'MySQL Integration', 'Session Management', 'Security Best Practices']
    }
  ];

  return (
    <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Certifications</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Skills Covered */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Skills Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg text-white">
            <p className="text-lg font-semibold mb-2">Continuous Learner</p>
            <p className="text-sm opacity-90">
              Constantly updating skills and staying current with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
