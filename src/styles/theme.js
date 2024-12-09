import mixins from './mixins';

// Definición del objeto theme que contiene las configuraciones del tema
const theme = {
  // BREAKPOINTS: Puntos de quiebre para diseño responsive
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  // MIXINS: Inclusión de los mixins importados
  mixins,
};

// Exportación del objeto theme como valor por defecto
export default theme;
