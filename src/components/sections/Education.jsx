import { motion } from 'framer-motion'
import { educationData } from '../../data/personalData'

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      className="glass-dark p-8 rounded-xl hover-glow transition-all duration-300 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center mb-6">
        <div className={`px-4 py-2 rounded-full text-sm font-medium mb-4 ${
          education.status === 'Completado' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {education.status}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {education.degree}
        </h3>
        <p className="text-primary-orange-light font-medium text-lg">
          {education.institution}
        </p>
      </div>
      
      <div className="space-y-3 text-sm text-gray-300">
        <p className="flex items-center justify-center gap-2">
          <span>📍</span> {education.location}
        </p>
        <p className="flex items-center justify-center gap-2">
          <span>📅</span> {education.period}
        </p>
        {education.honor && (
          <p className="text-primary-blue-light font-medium flex items-center justify-center gap-2">
            <span>🏆</span> {education.honor}
          </p>
        )}
      </div>
    </motion.div>
  )
}

const Education = () => {
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
          Títulos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <EducationCard 
              key={education.institution} 
              education={education} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 