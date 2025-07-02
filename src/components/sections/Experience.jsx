import { motion } from 'framer-motion'
import { experienceData } from '../../data/personalData'

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="glass-dark p-8 rounded-xl hover-glow transition-all duration-300 mb-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">
            {experience.position}
          </h3>
          <p className="text-xl text-primary-orange-light font-medium mb-2">
            {experience.company}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>📍 {experience.location}</span>
            <span>📅 {experience.period}</span>
            <span className={`px-3 py-1 rounded-full ${
              experience.type === 'Tiempo Completo' 
                ? 'bg-primary-blue/20 text-primary-blue-light' 
                : 'bg-primary-orange/20 text-primary-orange-light'
            }`}>
              {experience.type}
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-primary-blue-light mb-4">
          Logros y Responsabilidades:
        </h4>
        {experience.achievements.map((achievement, achIndex) => (
          <motion.div
            key={achIndex}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-orange text-sm mt-1">▶</span>
            <p className="text-gray-300 leading-relaxed">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experiencia Laboral
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary-gradient"></div>
          
          {experienceData.map((experience, index) => (
            <div key={experience.company} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-orange rounded-full border-4 border-primary-dark z-10"></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                <ExperienceCard experience={experience} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 