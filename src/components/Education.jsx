import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'G H Patel College of Engineering and Technology',
    duration: '2018 – 2022',
    cgpa: '8.17',
    maxCgpa: '10.0'
  };

  return (
    <section id="education" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Education</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="card p-8">
          <div className="flex items-start space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Degree */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {education.field}
              </p>

              {/* Institution */}
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {education.institution}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Duration */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{education.duration}</p>
                  </div>
                </div>

                {/* CGPA */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">CGPA</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {education.cgpa} / {education.maxCgpa}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar for CGPA */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Academic Performance</span>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {((parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-1000"
                    style={{ width: `${(parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
