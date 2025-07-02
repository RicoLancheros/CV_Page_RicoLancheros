# CV Interactivo - Alejandro Rico Lancheros

Portfolio personal desarrollado como una aplicación web moderna con diseño interactivo y modelo 3D responsivo al movimiento del mouse. Desplegado en Netlify para demostrar habilidades en desarrollo frontend y backend.

## Descripción

Este proyecto es mi curriculum vitae personal desarrollado como una Single Page Application (SPA) con React y Vite. Presenta un diseño moderno con fondo 3D interactivo, scroll continuo y efectos visuales avanzados. La aplicación está optimizada para mostrar experiencia profesional, habilidades técnicas, proyectos destacados y información de contacto de manera atractiva y profesional.

**Enlace en vivo**: [Próximamente en Netlify]

## Características Principales

- Diseño responsivo y moderno con colores oscuros profesionales
- Modelo 3D interactivo que responde al movimiento del mouse
- Scroll continuo con animaciones suaves
- Efectos glassmorphism y gradientes personalizados
- Secciones organizadas: Sobre mí, Educación, Experiencia, Habilidades, Proyectos, Idiomas y Contacto
- Optimizado para rendimiento y experiencia de usuario

## Tecnologías Utilizadas

### Frontend
- React 18.2.0
- Vite (Build tool y servidor de desarrollo)
- Tailwind CSS (Framework CSS utilitario)
- Framer Motion (Animaciones)
- React Icons (Iconografía)

### 3D y Interactividad
- Spline (@splinetool/react-spline 2.2.6)
- Mouse tracking personalizado con CSS 3D transforms

### Herramientas de Desarrollo
- ESLint (Linting)
- PostCSS (Procesamiento CSS)
- Autoprefixer (Compatibilidad de navegadores)

### Despliegue
- Netlify (Hosting y CI/CD)
- Git (Control de versiones)

## Requisitos Previos

- Node.js 16.0 o superior
- npm 8.0 o superior
- Git

## Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/RicoLancheros/CV_Page_RicoLancheros.git
cd CV_Page_RicoLancheros
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Construir para producción
```bash
npm run build
```

### 5. Vista previa de producción
```bash
npm run preview
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la versión de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   │   
│   │   └── Header.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Languages.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   └── ui/
│       ├── LoadingSpinner.jsx
│       └── SplineBackground.jsx
├── data/
│   └── personalData.js
├── assets/
│   └── images/
└── App.jsx
```

## Personalización

Para adaptar este CV a tu información personal:

1. Modifica `src/data/personalData.js` con tu información
2. Reemplaza las imágenes en `src/assets/images/`
3. Ajusta los colores en `tailwind.config.js` si es necesario
4. Personaliza el modelo 3D en `src/components/ui/SplineBackground.jsx`

## Despliegue en Netlify

El proyecto incluye configuración para Netlify (`netlify.toml`):

1. Conecta tu repositorio a Netlify
2. Netlify detectará automáticamente la configuración
3. El build se ejecutará automáticamente en cada push

## Optimizaciones Implementadas

- Lazy loading de componentes
- Optimización de imágenes
- CSS optimizado con Tailwind
- Throttling en eventos de mouse para mejor rendimiento
- Configuración de calidad ajustable para el modelo 3D

## Autor

**Alejandro Rico Lancheros**
- GitHub: [@RicoLancheros](https://github.com/RicoLancheros)
- Email: rico.lancheros@hotmail.com
- Ubicación: Medellín, Antioquia

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con React + Tailwind + Spline**
