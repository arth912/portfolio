import React from 'react';
import { Heart, Code, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/arth-rathod-6bb0a51b5',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/arth912',
      label: 'GitHub'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:arthrathod007@gmail.com',
      label: 'Email'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: 'https://arthrathod.netlify.app',
      label: 'Portfolio'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Arth Rathod</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about building scalable web applications 
              and solving complex technical challenges.
            </p>
            <div className="flex items-center space-x-2 text-primary-400">
              <Code className="w-4 h-4" />
              <span className="text-sm">MERN Stack • Node.js • Cloud</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <p className="text-gray-400">
                <a href="mailto:arthrathod007@gmail.com" className="hover:text-primary-400 transition-colors">
                  arthrathod007@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+919687608630" className="hover:text-primary-400 transition-colors">
                  +91-9687608630
                </a>
              </p>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Arth Rathod. All rights reserved.
            </p>
            
            <p className="flex items-center text-gray-400 text-sm">
              Built with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
