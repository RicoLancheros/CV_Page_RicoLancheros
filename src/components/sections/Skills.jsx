import { motion } from 'framer-motion'
import { skillsData } from '../../data/personalData'
import { 
  FaJsSquare, 
  FaJava, 
  FaPython, 
  FaReact, 
  FaHtml5,
  FaDocker, 
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCode
} from 'react-icons/fa'
import { 
  SiDotnet, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiMicrosoftazure,
  SiEclipseide,
  SiIntellijidea,
  SiVisualstudio,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiMicrosoftsqlserver,
  SiTypescript,
  SiGo
} from 'react-icons/si'

// Mapeo de tecnologías a iconos
const techIcons = {
  'JavaScript': <FaJsSquare className="text-yellow-400" />,
  'TypeScript': <SiTypescript className="text-blue-500" />,
  'Java': <FaJava className="text-red-500" />,
  'Python': <FaPython className="text-blue-400" />,
  '.NET': <SiDotnet className="text-purple-500" />,
  'Golang': <SiGo className="text-cyan-400" />,
  'React': <FaReact className="text-cyan-400" />,
  'Spring Boot': <SiSpringboot className="text-green-500" />,
  'Entity Framework': <SiDotnet className="text-purple-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
  'Spline': <FaCode className="text-orange-500" />,
  'Framer Motion': <SiFramer className="text-purple-400" />,
  'Vite': <SiVite className="text-yellow-500" />,
  'Visual Studio': <SiVisualstudio className="text-purple-600" />,
  'IntelliJ IDEA': <SiIntellijidea className="text-orange-600" />,
  'Eclipse': <SiEclipseide className="text-purple-700" />,
  'Git': <FaGitAlt className="text-orange-500" />,
  'MySQL': <SiMysql className="text-blue-600" />,
  'SQL Server': <SiMicrosoftsqlserver className="text-red-600" />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'Docker': <FaDocker className="text-blue-500" />,
  'Azure DevOps': <SiMicrosoftazure className="text-blue-400" />,
  'Traefik': <FaServer className="text-blue-400" />,
  'APIs REST': <FaDatabase className="text-green-400" />,
  'Microservicios': <FaCloud className="text-blue-400" />,
  'Arquitecturas Escalables': <FaServer className="text-purple-400" />
}

const SkillItem = ({ skill, index }) => {
  const icon = techIcons[skill] || <FaDatabase className="text-gray-400" />
  
  return (
    <motion.div
      className="flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-2xl">
        {icon}
      </div>
      <span className="text-gray-300 font-medium">{skill}</span>
    </motion.div>
  )
}

const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      className="glass-dark p-8 rounded-xl hover-glow transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-primary-orange/30 pb-3">
        {category}
      </h3>
      
      <div className="space-y-3">
        {skills.map((skill, skillIndex) => (
          <SkillItem key={skill} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
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
          Habilidades Técnicas
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCategory 
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 