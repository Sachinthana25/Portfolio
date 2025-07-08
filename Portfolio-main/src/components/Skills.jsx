import React from 'react'
import { motion } from 'framer-motion'
import { TestTube, Bug, Shield, Database, Code, Zap, Monitor, Layers } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'Testing & QA',
      icon: TestTube,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Manual Testing', level: 90 },
        { name: 'Test Case Design', level: 85 },
        { name: 'Bug Reporting', level: 88 },
        { name: 'API Testing', level: 80 },
        { name: 'Test Automation', level: 75 }
      ]
    },
    {
      title: 'Database & Systems',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'Linux/Windows', level: 80 },
        { name: 'Network Fundamentals', level: 70 }
      ]
    }
  ]

  const testingTypes = [
    { name: 'Web Development', icon: Monitor },
    { name: 'Mobile Development', icon: Layers },
    { name: 'API Development', icon: Database },
    { name: 'Functional Testing', icon: TestTube },
    { name: 'UI/UX Testing', icon: Shield },
    { name: 'Performance Testing', icon: Zap }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive skill set spanning software development, quality assurance, and IT systems for building robust applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testing Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Areas of Focus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <type.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors duration-300">
                    {type.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Python', 'Java', 'JavaScript', 'SQL', 
              'MySQL', 'HTML/CSS', 'Git', 'Postman', 'Selenium', 'JIRA',
              'VS Code', 'Chrome DevTools', 'Agile/Scrum', 'Test Documentation'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-gray-300 px-6 py-3 rounded-full border border-slate-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
