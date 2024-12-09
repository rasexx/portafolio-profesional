import { css } from 'styled-components';

const variables = css`
  :root {
    // COLORES: Definición de la paleta de colores
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #1e3d5c;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #4f6269;
    --slate: #789abf;
    --light-slate: #a1c2e8;
    --lightest-slate: #e6f1ff;
    --white: #e6f1ff;
    --green: #00acff;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    // TIPOGRAFÍA: Definición de fuentes
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    // TAMAÑOS DE FUENTE: Definición de tamaños de texto
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    // DISEÑO: Variables para elementos de diseño
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    // PESTAÑAS: Dimensiones de las pestañas
    --tab-height: 42px;
    --tab-width: 120px;

    // ANIMACIONES: Variables para transiciones y animaciones
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    // MENÚ HAMBURGUESA: Variables para el menú móvil
    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
