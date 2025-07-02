import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa'
import { personalInfo } from '../../data/personalData'

const contactData = [
  {
    name: "Email",
    icon: FaEnvelope,
    value: personalInfo.email,
    href: personalInfo.socialLinks.email,
    color: "primary-orange"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    value: `@${personalInfo.github}`,
    href: personalInfo.socialLinks.github,
    color: "primary-blue"
  },
  {
    name: "Teléfono",
    icon: FaPhone,
    value: personalInfo.phone,
    href: personalInfo.socialLinks.phone,
    color: "primary-orange"
  }
]

const ContactCard = ({ contact, index }) => {
  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-dark p-6 rounded-xl hover-glow transition-all duration-300 group block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-full ${
          contact.color === 'primary-orange' 
            ? 'bg-primary-orange/20 group-hover:bg-primary-orange/30' 
            : 'bg-primary-blue/20 group-hover:bg-primary-blue/30'
        } transition-colors`}>
          <contact.icon className={`text-3xl ${
            contact.color === 'primary-orange' ? 'text-primary-orange' : 'text-primary-blue'
          }`} />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {contact.name}
          </h3>
          <p className={`text-sm ${
            contact.color === 'primary-orange' ? 'text-primary-orange-light' : 'text-primary-blue-light'
          }`}>
            {contact.value}
          </p>
        </div>
      </div>
    </motion.a>
  )
}

const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contáctame
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades en desarrollo backend, 
            microservicios e inteligencia artificial. ¡Conversemos sobre tu próximo proyecto!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {contactData.map((contact, index) => (
            <ContactCard 
              key={contact.name} 
              contact={contact} 
              index={index} 
            />
          ))}
        </div>
        

      </div>
    </section>
  )
}

export default Contact 