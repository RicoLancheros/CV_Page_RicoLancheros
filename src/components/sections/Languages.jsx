import { motion } from 'framer-motion'
import { languagesData } from '../../data/personalData'

const Languages = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Idiomas
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {languagesData.map((lang, index) => (
            <motion.div
              key={lang.language}
              className="glass-dark p-8 rounded-xl text-center min-w-[200px] hover-glow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">
                {lang.language === 'Español' ? '🇨🇴' : '🇺🇸'}
              </div>
              <p className="text-xl font-semibold text-white mb-2">{lang.language}</p>
              <p className="text-primary-orange-light font-medium">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages 