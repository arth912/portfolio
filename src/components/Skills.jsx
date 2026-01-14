import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Django', 'Socket.IO', 'LoopBack 4', 'GraphQL', 'Flask'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Frontend',
      skills: ['React', 'Redux', 'Material UI', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'DevOps & Tools',
      skills: ['AWS (EC2, S3, Lambda, RDS)', 'Docker', 'Jenkins', 'Git'],
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Other Technologies',
      skills: ['YOLOv8', 'Redis', 'RabbitMQ', 'Selenium', 'Web Scraping', 'BeautifulSoup', 'Pandas'],
      color: 'from-indigo-500 to-indigo-700'
    },
  ];

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Category Header */}
              <div className="mb-4">
                <div className={`inline-block px-4 py-1 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold text-sm mb-3`}>
                  {category.title}
                </div>
              </div>
              
              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Always learning and exploring new technologies to build better solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
