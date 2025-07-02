import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personalData'

const Header = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 hero-name drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl lg:text-4xl mb-8 font-medium text-primary-orange drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            filter: 'brightness(1.3) saturate(1.2)',
            textShadow: '0 0 15px rgba(255, 87, 34, 0.6)'
          }}
        >
          {personalInfo.title}
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md mb-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-primary-orange"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>📍 {personalInfo.location}</span>
          <span className="hidden md:block">•</span>
          <span>📧 {personalInfo.email}</span>
          <span className="hidden md:block">•</span>
          <span>📱 {personalInfo.phone}</span>
        </motion.div>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button 
            className="glass-dark hover-glow px-8 py-4 text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Conoce mi experiencia ↓
          </button>
        </motion.div>
      </motion.div>
      
      {/* Floating elements decoration con nuevos colores */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary-orange/30 rounded-full drop-shadow-md"></div>
        <div className="floating absolute top-40 right-20 w-6 h-6 bg-primary-blue/25 rounded-full drop-shadow-md" style={{animationDelay: '2s'}}></div>
        <div className="floating absolute bottom-32 left-20 w-5 h-5 bg-primary-orange/35 rounded-full drop-shadow-md" style={{animationDelay: '4s'}}></div>
        <div className="floating absolute top-1/2 right-1/3 w-3 h-3 bg-primary-blue/20 rounded-full drop-shadow-md" style={{animationDelay: '6s'}}></div>
      </div>
    </section>
  )
}

export default Header 