import { Suspense, useState, useCallback, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import LoadingSpinner from './LoadingSpinner'

const SplineBackground = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [splineApp, setSplineApp] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const lastUpdateTime = useRef(0)

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now()
      if (now - lastUpdateTime.current < 50) return
      lastUpdateTime.current = now
      
      const x = (e.clientX / window.innerWidth - 0.2) * 0.2
      const y = (e.clientY / window.innerHeight - 0.2) * 0.2
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Aplicar transformaciones
  useEffect(() => {
    if (!splineApp) return

    try {
      // Variables de Spline
      if (splineApp.setVariable) {
        splineApp.setVariable('mouseX', mousePosition.x * 0.2)
        splineApp.setVariable('mouseY', mousePosition.y * 0.2)
      }

      // Control de cámara
      if (splineApp.setCamera) {
        splineApp.setCamera('Camera', {
          position: { 
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
            z: 1000
          },
          target: { x: 0, y: 0, z: 0 }
        })
      }

      // Buscar objetos por nombre
      if (splineApp.findObjectByName) {
        const names = ['Scene', 'Root', 'Group', 'Mushroom', 'Model', 'Object']
        
        names.forEach(name => {
          try {
            const obj = splineApp.findObjectByName(name)
            if (obj) {
              if (obj.rotation) {
                obj.rotation.x = mousePosition.y * 0.2
                obj.rotation.y = mousePosition.x * 0.2
              }
            }
          } catch (error) {
            // Ignorar errores
          }
        })
      }

      // Escena completa
      if (splineApp.scene) {
        try {
          splineApp.scene.rotation.x = mousePosition.y * 0.1
          splineApp.scene.rotation.y = mousePosition.x * 0.1
        } catch (error) {
          // Ignorar errores
        }
      }

      // Render manual
      if (splineApp.render) {
        splineApp.render()
      }

    } catch (error) {
      // Silenciar errores
    }
  }, [mousePosition, splineApp])

  const onLoad = useCallback((spline) => {
    setSplineApp(spline)
    setIsLoading(false)
    
    try {
      // Configurar cámara inicial
      if (spline.setCamera) {
        spline.setCamera('Camera', {
          position: { x: 0, y: 0, z: 1000 },
          target: { x: 0, y: 0, z: 0 }
        })
      }
      
      // Inicializar variables
      if (spline.setVariable) {
        spline.setVariable('mouseX', 0)
        spline.setVariable('mouseY', 0)
      }
      
      // Calidad media
      if (spline.setQuality) {
        spline.setQuality('medium')
      }
      
    } catch (error) {
      // Configuración silenciosa
    }
  }, [])

  const onError = useCallback((error) => {
    setHasError(true)
    setIsLoading(false)
  }, [])

  // Fallback con movimiento
  const SimpleFallback = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
      const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10
        const y = (e.clientY / window.innerHeight - 0.5) * 10
        setPos({ x, y })
      }

      window.addEventListener('mousemove', handleMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
        <div 
          className="text-8xl opacity-40"
          style={{
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotateY(${pos.x * 0.5}deg)`,
            transition: 'transform 0.2s ease'
          }}
        >
          🍄
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0">
      <Suspense fallback={<LoadingSpinner message="Cargando modelo 3D..." />}>
        <div className="w-full h-full relative">
          {!hasError ? (
            <>
              {/* Contenedor con transformaciones CSS */}
              <div 
                className="w-full h-full"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                  transition: 'transform 0.2s ease',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Spline
                  scene="https://prod.spline.design/QlDlSV2lVDOjSanp/scene.splinecode"
                  onLoad={onLoad}
                  onError={onError}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    transform: 'scale(1.2) translate3d(0,0,0)',
                    willChange: 'transform',
                    opacity: 2
                  }}
                />
              </div>
              
              {/* Loading */}
              {isLoading && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
                  <div className="text-white">Cargando...</div>
                </div>
              )}
              
              {/* Overlay simplificado */}
              <div 
                className="absolute inset-0 pointer-events-none bg-gray-900/40"
                style={{
                  background: 'rgba(20,20,20,0.2)'
                }}
              />
              
              {/* Overlay del mouse */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(204,68,0,0.02) 0%, transparent 50%)`
                }}
              />
              
              {/* Indicador sutil */}
              <div className="absolute bottom-4 right-4 text-white/15 text-xs pointer-events-none">
                🖱️ Modelo interactivo
              </div>
            </>
          ) : (
            <SimpleFallback />
          )}
        </div>
      </Suspense>
    </div>
  )
}

export default SplineBackground 