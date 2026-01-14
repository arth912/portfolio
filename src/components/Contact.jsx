import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'arthrathod007@gmail.com',
      href: 'mailto:arthrathod007@gmail.com',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-9687608630',
      href: 'tel:+919687608630',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'arth-rathod-6bb0a51b5',
      href: 'https://linkedin.com/in/arth-rathod-6bb0a51b5',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'arth912',
      href: 'https://github.com/arth912',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="max-w-5xl mx-auto">
        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the channels below!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="card p-6 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white text-center">
          <Send className="w-12 h-12 mx-auto mb-4 animate-float" />
          <h3 className="text-2xl font-bold mb-3">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:arthrathod007@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/arth-rathod-6bb0a51b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
