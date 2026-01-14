import React from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Arth_Rathod_Resume_MERN_Stack.pdf';
    link.download = 'Arth_Rathod_Resume_MERN_Stack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Name and Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Arth Rathod
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Experienced developer with <span className="font-semibold text-primary-600 dark:text-primary-400">3+ years</span> of building scalable backend APIs and cloud-ready web applications using the MERN stack and Python frameworks. 
              Specialized in Node.js, Django, FastAPI, REST APIs, microservices, web scraping, and cloud deployment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a href="#projects" className="btn-primary">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </a>
              <button onClick={handleDownloadResume} className="btn-secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <a href="#contact" className="btn-secondary">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://linkedin.com/in/arth-rathod-6bb0a51b5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/arth912"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://arthrathod.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex items-center justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full opacity-30 animate-float"></div>
              
              {/* Profile Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-primary-100 dark:ring-offset-gray-900">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Arth Rathod - Full Stack Developer" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-xl border-2 border-primary-500 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center animate-bounce">
          <a href="#about" className="inline-block">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
              <div className="w-1.5 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mx-auto animate-pulse"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
