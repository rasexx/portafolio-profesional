module.exports = {
  // Correo electrónico de contacto
  email: 'jrgarciadr29@gmail.com',

  // Redes sociales
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rasexx',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jrrg/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jseramn/',
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/jseramn',
    },
  ],

  // Enlaces de navegación
  navLinks: [
    {
      name: 'Sobre mi',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  // Colores del tema
  colors: {
    green: '#A3B18A', // Earthy green
    navy: '#344E41', // Deep forest green
    darkNavy: '#1B4332', // Dark natural green
  },

  // Configuración de animación de desplazamiento
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
