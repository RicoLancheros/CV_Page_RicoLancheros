const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <div className="absolute inset-0 bg-dark-gradient flex items-center justify-center z-20">
      <div className="text-center">
        {/* Emoji simple sin animaciones pesadas */}
        <div className="text-6xl mb-4 opacity-70">
          🍄
        </div>
        
        {/* Texto de carga simple */}
        <p className="text-white/80 text-lg font-medium mb-4">
          {message}
        </p>
        
        {/* Barra de progreso simple */}
        <div className="w-48 h-1 bg-primary-gray rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary-orange rounded-full animate-pulse"
            style={{ width: '60%' }}
          />
        </div>
        
        {/* Puntos simples */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-1 h-1 bg-primary-orange rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-1 h-1 bg-primary-blue rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner 