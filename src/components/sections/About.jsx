import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personalData'
import profileImage from '../../assets/images/Mifotoyo.jfif'

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold gradient-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sobre Mí
            </motion.h2>
            
            {personalInfo.bio.map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="px-6 py-3 glass-dark text-primary-orange-light border border-primary-orange/30 rounded-full">
                Backend Specialist
              </span>
              <span className="px-6 py-3 glass-dark text-primary-blue-light border border-primary-blue/30 rounded-full">
                Microservicios
              </span>
              <span className="px-6 py-3 glass-dark text-white border border-white/30 rounded-full">
                AI/ML Developer
              </span>
            </motion.div>
          </div>
          
          {/* Avatar/Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-primary-gradient p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Alejandro Rico Lancheros" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center text-2xl animate-bounce">
                🚀
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-lg animate-pulse">
                ⚡
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 