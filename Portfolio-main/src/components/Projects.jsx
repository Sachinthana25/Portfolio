import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, TestTube, Bug, Shield, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website Testing',
      description: 'Comprehensive testing of an e-commerce platform including functional testing, user journey validation, payment gateway testing, and cross-browser compatibility. Created detailed test cases and bug reports.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['Manual Testing', 'Test Cases', 'Bug Reports', 'Cross-browser Testing', 'API Testing'],
      testingType: 'Functional Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: true,
      icon: TestTube
    },
    {
      title: 'Mobile App QA Testing',
      description: 'Quality assurance testing for a mobile application focusing on usability, performance, and compatibility across different devices and operating systems. Executed regression testing cycles.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      technologies: ['Mobile Testing', 'Usability Testing', 'Performance Testing', 'Regression Testing', 'Device Compatibility'],
      testingType: 'Mobile Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: false,
      icon: Shield
    },
    {
      title: 'API Testing Project',
      description: 'End-to-end API testing using Postman, including request/response validation, authentication testing, error handling, and performance benchmarking. Created automated test collections.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Postman', 'API Testing', 'Authentication Testing', 'JSON Validation', 'Test Automation'],
      testingType: 'API Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: true,
      icon: Database
    },
    {
      title: 'Web Application Security Testing',
      description: 'Security testing of a web application including vulnerability assessment, input validation testing, authentication and authorization testing, and SQL injection prevention testing.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop',
      technologies: ['Security Testing', 'Vulnerability Assessment', 'Input Validation', 'Authentication Testing', 'SQL Injection Testing'],
      testingType: 'Security Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: false,
      icon: Shield
    },
    {
      title: 'Database Testing Project',
      description: 'Comprehensive database testing including data integrity validation, CRUD operations testing, performance testing, and backup/recovery testing. Created SQL test scripts and documented findings.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop',
      technologies: ['SQL Testing', 'Data Integrity', 'CRUD Testing', 'Performance Testing', 'Test Scripts'],
      testingType: 'Database Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: false,
      icon: Database
    },
    {
      title: 'Automated Testing Framework',
      description: 'Developed automated test scripts using Selenium WebDriver for web application testing. Implemented page object model, created test data management, and integrated with CI/CD pipeline.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      technologies: ['Selenium', 'Test Automation', 'Page Object Model', 'CI/CD Integration', 'Test Framework'],
      testingType: 'Automation Testing',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sachinthana25',
      featured: true,
      icon: Bug
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      'Functional Testing': 'from-blue-500 to-blue-600',
      'Mobile Testing': 'from-purple-500 to-purple-600',
      'API Testing': 'from-green-500 to-green-600',
      'Security Testing': 'from-red-500 to-red-600',
      'Database Testing': 'from-orange-500 to-orange-600',
      'Automation Testing': 'from-pink-500 to-pink-600'
    }
    return colors[type] || 'from-gray-500 to-gray-600'
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testing Projects & QA Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Showcase of my quality assurance projects, testing methodologies, and bug-finding expertise across various platforms and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group ${
                project.featured ? 'lg:col-span-1 ring-1 ring-blue-500/20' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${getTypeColor(project.testingType)} px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center space-x-2`}>
                    <project.icon size={16} />
                    <span>{project.testingType}</span>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                      aria-label="View project details"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
                      aria-label="View documentation"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/50 hover:border-blue-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Details
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Documentation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for Internship Opportunities
            </h3>
            <p className="text-gray-300 mb-6">
              I'm eager to apply my skills in a real-world environment and contribute to innovative projects while continuing to learn and grow.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <TestTube size={20} className="mr-2" />
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
