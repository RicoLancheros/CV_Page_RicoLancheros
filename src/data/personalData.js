// Datos personales actualizados de Alejandro Rico Lancheros
export const personalInfo = {
  name: "Alejandro Rico Lancheros",
  title: "Desarrollador Backend Full Stack",
  tagline: "Desarrollador fullstack especializado en Java, python con conocimientos en JavaScript, TypeScript",
  email: "rico.lancheros@hotmail.com",
  phone: "3217895795",
  location: "Medellín, Antioquia",
  github: "RicoLancheros",
  
  bio: [
    "Desarrollador Backend Full Stack con experiencia en SURA y más de 15 proyectos autónomos. Especializado en arquitecturas de microservicios, APIs REST escalables y soluciones de Inteligencia Artificial.",
    "Graduado con honores académicos del CESDE-CONFAMA como Técnico en Desarrollo de Software. Apasionado por el desarrollo de agentes y modelos de Machine Learning en entornos corporativos escalables."
  ],
  
  socialLinks: {
    github: "https://github.com/RicoLancheros",
    email: "mailto:rico.lancheros@hotmail.com",
    phone: "tel:+573217895795"
  }
}

// Educación
export const educationData = [
  {
    institution: "CESDE-CONFAMA",
    degree: "Técnico en Desarrollo de Software",
    location: "Medellín, Antioquia",
    period: "Graduado Enero 2025",
    honor: "Graduado con honores académicos",
    status: "Completado"
  },
  {
    institution: "ITM - Institución Universitaria",
    degree: "Ingeniero de Software",
    location: "Medellín, Antioquia",
    period: "En curso - Pausado",
    status: "Pausado"
  },
  {
    institution: "SENA",
    degree: "Análisis y Desarrollo de Software",
    location: "Medellín, Antioquia",
    period: "Octubre 2024 - Presente",
    status: "En curso"
  }
]

// Experiencia Laboral
export const experienceData = [
  {
    company: "SURA",
    position: "Aprendiz en Desarrollo de Software",
    location: "Medellín, Antioquia",
    period: "Enero 2024 - Diciembre 2024",
    type: "Tiempo Completo",
    achievements: [
      "Participación activa en el equipo de Aplicaciones Base TI en el área de Operación como Aprendiz de Analista",
      "Desarrollo y mantenimiento de aplicaciones utilizando Azure DevOps para gestión de proyectos y versionado",
      "Implementación de soluciones de software utilizando Git, Eclipse IDE, Visual Studio e IntelliJ IDEA",
      "Soporte técnico y atención en funciones operativas, Colaboración en arquitecturas backend escalables dentro de entornos corporativos",
      "Desarrollo del rol de Soporte y mantenimiento de Arquitectura en el módulo de Desarrollo y DevOps"
    ]
  },
  {
    company: "Proyectos Independientes",
    position: "Desarrollador Full Stack",
    location: "Medellín, Antioquia", 
    period: "Enero 2021 - Presente",
    type: "Freelance",
    achievements: [
      "Desarrollo de e-commerce completo para 'Cheos Café', empresa especializada en venta de café premium, incluyendo catálogo, carrito de compras y sistema de pagos",
      "Participación activa en el proyecto SION, empresa enfocada en brindar soluciones tecnológicas innovadoras para la digitalización de otras empresas",
      "Implementación de arquitecturas de microservicios y APIs REST escalables utilizando Spring Boot, Docker y tecnologías cloud",
      "Creación de más de 10 aplicaciones web utilizando React, JavaScript, Java, Python y .NET con bases de datos MySQL y MongoDB",
      "Desarrollo de soluciones de automatización y herramientas de gestión empresarial para pequeñas y medianas empresas"
    ]
  }
]

// Habilidades (sin porcentajes)
export const skillsData = {
  "Lenguajes de Programación": [
    "JavaScript", "TypeScript", "Java", "Python", ".NET", "Golang"
  ],
  "Frameworks & Librerías": [
    "React", "Spring Boot", "Entity Framework", "Tailwind CSS", "Spline", "Framer Motion", "Vite"
  ],
  "Herramientas de Desarrollo": [
    "Visual Studio", "IntelliJ IDEA", "Eclipse", "Git"
  ],
  "Bases de Datos": [
    "MySQL", "SQL Server", "MongoDB"
  ],
  "DevOps & Cloud": [
    "Docker", "Azure DevOps", "Traefik"
  ],
  "Arquitectura & APIs": [
    "APIs REST", "Microservicios", "Arquitecturas Escalables"
  ]
}

// Intereses especiales
export const interestsData = [
  "Inteligencia Artificial",
  "Desarrollo de Agentes",
  "Modelos de Machine Learning",
  "Arquitecturas Escalables",
  "Microservicios"
]

// Idiomas
export const languagesData = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "B1" }
]

// Proyectos destacados
export const projectsData = [
  {
    id: 1,
    title: "Reservation System",
    description: "Sistema integral de gestión de reservas de películas desarrollado con arquitectura de microservicios. Combina un backend robusto en Spring Boot con un frontend moderno en React TypeScript, ofreciendo una experiencia completa para la gestión de cines, películas y reservas de asientos.",
    link: "https://github.com/RicoLancheros/Movie_Reservation_System_Alej-Rico",
    image: "Movie_Reservation.png",
    technologies: ["Node.js 18+", "Java 17+", "Docker", "Git"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "API REST Escalable",
    description: "Diseño y desarrollo de APIs REST escalables con integración a múltiples bases de datos para proyectos independientes.",
    icon: "🚀",
    technologies: ["Java", ".NET", "MySQL", "MongoDB"],
    category: "Backend",
    featured: true
  },
  {
    id: 3,
    title: "Solución de Inteligencia Artificial",
    description: "Desarrollo de agentes inteligentes y modelos de Machine Learning para automatización de procesos.",
    icon: "🤖",
    technologies: ["Python", "Machine Learning", "AI Agents"],
    category: "AI/ML",
    featured: true
  }
] 