import { motion } from 'framer-motion'
import { projectsData } from '../../data/personalData'
import movieReservationImage from '../../assets/images/Movie_Reservation.png'
import lavacaImage from '../../assets/images/lavaca.png'
import autoInvoicerImage from '../../assets/images/AutoInvoicer.jfif'

// Mapeo de imágenes
const projectImages = {
  'Movie_Reservation.png': movieReservationImage,
  'lavaca.png': lavacaImage,
  'AutoInvoicer.jfif': autoInvoicerImage
}

const ProjectCard = ({ project, index }) => {
  const handleCardClick = () => {
    // Priorizar demo en vivo si existe, sino abrir repositorio
    if (project.liveDemo) {
      window.open(project.liveDemo, '_blank')
    } else if (project.link) {
      window.open(project.link, '_blank')
    }
  }

  return (
    <motion.div
      className="glass-dark rounded-xl overflow-hidden hover-glow transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div 
        className={`h-48 bg-primary-gradient-soft flex items-center justify-center text-6xl relative overflow-hidden ${
          (project.liveDemo || project.link) ? 'cursor-pointer' : ''
        }`}
        onClick={handleCardClick}
      >
        {project.image ? (
          <img 
            src={projectImages[project.image]} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          project.icon
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.category === 'Backend' 
              ? 'bg-primary-orange/20 text-primary-orange-light' 
              : project.category === 'Full Stack'
              ? 'bg-green-500/20 text-green-400'
              : project.category === 'Colaboración'
              ? 'bg-purple-500/20 text-purple-400'
              : project.category === 'IA/Desktop'
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-primary-blue/20 text-primary-blue-light'
          }`}>
            {project.category}
          </span>
        </div>
        {(project.link || project.liveDemo) && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {project.liveDemo ? 'Ver Demo →' : 'Ver Proyecto →'}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-primary-gray border border-primary-blue/30 text-primary-blue-light text-xs rounded-full hover:border-primary-orange/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.link || project.liveDemo) && (
          <div className="flex flex-col gap-2">
            {project.liveDemo && (
              <div 
                className="text-green-400 text-sm font-medium cursor-pointer hover:text-green-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveDemo, '_blank')
                }}
              >
                Demo en Vivo →
              </div>
            )}
            {project.link && (
              <div 
                className="text-primary-orange text-sm font-medium cursor-pointer hover:text-primary-orange-light transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.link, '_blank')
                }}
              >
                GitHub Repository →
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Algunos de mis trabajos más significativos que demuestran experiencia 
            en desarrollo backend, microservicios e inteligencia artificial.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            +15 proyectos desarrollados en total, incluyendo arquitecturas de microservicios, 
            APIs REST escalables y soluciones de IA para empresas.
          </p>
          <a 
            href="https://github.com/RicoLancheros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-dark hover-glow px-8 py-3 rounded-full font-medium text-primary-orange border border-primary-orange/50 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Ver más en GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 