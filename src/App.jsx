import './App.css'
import SplineBackground from './components/ui/SplineBackground'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Languages from './components/sections/Languages'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="App relative min-h-screen bg-dark-gradient">
      {/* Fondo 3D optimizado */}
      <SplineBackground />
      
      {/* Contenido principal optimizado */}
      <div className="relative z-10">
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Languages />
        <Contact />
        
        {/* Footer simple */}
        <footer className="py-6 px-4 text-center text-gray-400 bg-primary-dark/60 border-t border-primary-orange/20">
          <div className="max-w-4xl mx-auto">
            <p className="mb-1 text-sm">
              © 2024 Alejandro Rico Lancheros. React + Tailwind + Spline.
            </p>
            <p className="text-xs text-gray-500">
              Backend Developer • Microservices • AI/ML
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App 