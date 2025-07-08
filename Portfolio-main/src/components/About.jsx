import React from 'react'
import { motion } from 'framer-motion'
import { TestTube, Bug, Shield, Target, Award, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: TestTube,
      title: 'Manual Testing',
      description: 'Comprehensive testing methodologies including functional, usability, and regression testing'
    },
    {
      icon: Bug,
      title: 'Bug Detection & Reporting',
      description: 'Systematic approach to identifying, documenting, and tracking defects throughout the SDLC'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Ensuring software meets quality standards through rigorous testing and validation processes'
    },
    {
      icon: Target,
      title: 'Test Planning & Strategy',
      description: 'Creating comprehensive test plans, test cases, and testing strategies for optimal coverage'
    },
    {
      icon: Award,
      title: 'Automation Testing',
      description: 'Experience with automated testing tools and frameworks to improve testing efficiency'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively with development teams, stakeholders, and cross-functional groups'
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Passionate about ensuring software quality and user satisfaction through meticulous testing and quality assurance practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">            <h3 className="text-2xl font-semibold text-white mb-6">
              IT Student & Aspiring QA Professional
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Sachinthana Godakanda, a dedicated Information Technology student with a growing 
              passion for quality assurance and software testing. Currently pursuing a BSc in 
              Information Technology, I'm building expertise in both technical development and 
              quality assurance methodologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With hands-on experience in software development using modern technologies like React, 
              Node.js, and databases, combined with growing expertise in testing methodologies, 
              I bring a unique perspective to quality assurance that bridges development and testing.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My academic background provides strong fundamentals in programming, system design, 
              and software engineering principles, while my interest in QA drives me to ensure 
              robust, user-friendly applications through systematic testing approaches.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm passionate about continuous learning, staying updated with the latest technologies 
              and testing methodologies, and contributing to projects that deliver exceptional 
              user experiences through quality software.
            </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                  IT Student
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                  Developer
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                  QA Enthusiast
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                  Quality Focused
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                  Problem Solver
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
