// Importación de módulos y estilos
import { createGlobalStyle } from 'styled-components'; // Importación de la función para crear estilos globales
import fonts from './fonts'; // Importación de estilos de fuentes
import variables from './variables'; // Importación de variables de estilo
import TransitionStyles from './TransitionStyles'; // Importación de estilos de transición
import PrismStyles from './PrismStyles'; // Importación de estilos de Prism

// Definición de estilos globales
const GlobalStyle = createGlobalStyle`
  ${fonts}; // Inclusión de estilos de fuentes
  ${variables}; // Inclusión de variables de estilo

  // Estilos para el elemento html
  html {
    box-sizing: border-box; // Modelo de caja
    width: 100%; // Ancho completo
    scroll-behavior: smooth; // Comportamiento suave del scroll
  }

  // Estilos para todos los elementos y pseudo-elementos
  *,
  *:before,
  *:after {
    box-sizing: inherit; // Herencia del modelo de caja
  }

  // Estilos para la selección de texto
  ::selection {
    background-color: var(--lightest-navy); // Color de fondo de la selección
    color: var(--lightest-slate); // Color del texto seleccionado
  }

  // Estilos de enfoque por defecto
  :focus {
    outline: 2px dashed var(--green); // Contorno de enfoque
    outline-offset: 3px; // Desplazamiento del contorno
  }

  // Eliminación de estilos de enfoque por defecto para usuarios de mouse si :focus-visible es soportado
  :focus:not(:focus-visible) {
    outline: none; // Sin contorno
    outline-offset: 0px; // Sin desplazamiento
  }

  // Estilos de enfoque mejorados para teclado si :focus-visible es soportado
  :focus-visible {
    outline: 2px dashed var(--green); // Contorno de enfoque
    outline-offset: 3px; // Desplazamiento del contorno
  }

  // Estilos de la barra de desplazamiento
  html {
    scrollbar-width: thin; // Ancho de la barra de desplazamiento
    scrollbar-color: var(--dark-slate) var(--navy); // Colores de la barra de desplazamiento
  }
  ::-webkit-scrollbar {
    width: 12px; // Ancho de la barra de desplazamiento en WebKit
  }
  ::-webkit-scrollbar-track {
    background: var(--navy); // Color de fondo de la pista de desplazamiento
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate); // Color de fondo del pulgar de desplazamiento
    border: 3px solid var(--navy); // Borde del pulgar de desplazamiento
    border-radius: 10px; // Radio del borde del pulgar de desplazamiento
  }

  // Estilos para el cuerpo del documento
  body {
    margin: 0; // Sin margen
    width: 100%; // Ancho completo
    min-height: 100%; // Altura mínima completa
    overflow-x: hidden; // Ocultar desbordamiento horizontal
    -moz-osx-font-smoothing: grayscale; // Suavizado de fuentes en OSX
    -webkit-font-smoothing: antialiased; // Suavizado de fuentes en WebKit
    background-color: var(--navy); // Color de fondo
    color: var(--slate); // Color del texto
    font-family: var(--font-sans); // Familia de fuentes
    font-size: var(--fz-xl); // Tamaño de fuente
    line-height: 1.3; // Altura de línea

    @media (max-width: 480px) {
      font-size: var(--fz-lg); // Tamaño de fuente en dispositivos pequeños
    }

    // Clase para ocultar el desbordamiento
    &.hidden {
      overflow: hidden; // Ocultar desbordamiento
    }

    // Clase para aplicar efecto de desenfoque
    &.blur {
      overflow: hidden; // Ocultar desbordamiento

      header {
        background-color: transparent; // Fondo transparente del encabezado
      }

      #content > * {
        filter: blur(5px) brightness(0.7); // Filtro de desenfoque y brillo
        transition: var(--transition); // Transición
        pointer-events: none; // Deshabilitar eventos del puntero
        user-select: none; // Deshabilitar selección de usuario
      }
    }
  }

  // Estilos para el contenedor principal
  #root {
    min-height: 100vh; // Altura mínima completa de la ventana
    display: grid; // Display de tipo grid
    grid-template-rows: 1fr auto; // Filas del grid
    grid-template-columns: 100%; // Columnas del grid
  }

  // Estilos para el contenido principal
  main {
    margin: 0 auto; // Margen automático
    width: 100%; // Ancho completo
    max-width: 1600px; // Ancho máximo
    min-height: 100vh; // Altura mínima completa de la ventana
    padding: 200px 150px; // Relleno

    @media (max-width: 1080px) {
      padding: 200px 100px; // Relleno en dispositivos medianos
    }
    @media (max-width: 768px) {
      padding: 150px 50px; // Relleno en dispositivos pequeños
    }
    @media (max-width: 480px) {
      padding: 125px 25px; // Relleno en dispositivos muy pequeños
    }

    // Clase para llenar la altura completa
    &.fillHeight {
      padding: 0 150px; // Relleno

      @media (max-width: 1080px) {
        padding: 0 100px; // Relleno en dispositivos medianos
      }
      @media (max-width: 768px) {
        padding: 0 50px; // Relleno en dispositivos pequeños
      }
      @media (max-width: 480px) {
        padding: 0 25px; // Relleno en dispositivos muy pequeños
      }
    }
  }

  // Estilos para las secciones
  section {
    margin: 0 auto; // Margen automático
    padding: 100px 0; // Relleno
    max-width: 1000px; // Ancho máximo

    @media (max-width: 768px) {
      padding: 80px 0; // Relleno en dispositivos pequeños
    }

    @media (max-width: 480px) {
      padding: 60px 0; // Relleno en dispositivos muy pequeños
    }
  }

  // Estilos para los encabezados
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0; // Margen
    font-weight: 600; // Peso de la fuente
    color: var(--lightest-slate); // Color del texto
    line-height: 1.1; // Altura de línea
  }

  // Estilos para el encabezado grande
  .big-heading {
    margin: 0; // Sin margen
    font-size: clamp(40px, 8vw, 80px); // Tamaño de fuente
  }

  // Estilos para el encabezado mediano
  .medium-heading {
    margin: 0; // Sin margen
    font-size: clamp(40px, 8vw, 60px); // Tamaño de fuente
  }

  // Estilos para el encabezado numerado
  .numbered-heading {
    display: flex; // Display flex
    align-items: center; // Alineación de elementos al centro
    position: relative; // Posición relativa
    margin: 10px 0 40px; // Margen
    width: 100%; // Ancho completo
    font-size: clamp(26px, 5vw, var(--fz-heading)); // Tamaño de fuente
    white-space: nowrap; // Sin espacio en blanco

    &:before {
      position: relative; // Posición relativa
      bottom: 4px; // Desplazamiento hacia abajo
      counter-increment: section; // Incremento del contador de sección
      content: '0' counter(section) '.'; // Contenido del pseudo-elemento
      margin-right: 10px; // Margen derecho
      color: var(--green); // Color del texto
      font-family: var(--font-mono); // Familia de fuentes
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl)); // Tamaño de fuente
      font-weight: 400; // Peso de la fuente

      @media (max-width: 480px) {
        margin-bottom: -3px; // Margen inferior en dispositivos muy pequeños
        margin-right: 5px; // Margen derecho en dispositivos muy pequeños
      }
    }

    &:after {
      content: ''; // Contenido vacío
      display: block; // Display block
      position: relative; // Posición relativa
      top: -5px; // Desplazamiento hacia arriba
      width: 300px; // Ancho
      height: 1px; // Altura
      margin-left: 20px; // Margen izquierdo
      background-color: var(--lightest-navy); // Color de fondo

      @media (max-width: 1080px) {
        width: 200px; // Ancho en dispositivos medianos
      }
      @media (max-width: 768px) {
        width: 100%; // Ancho completo en dispositivos pequeños
      }
      @media (max-width: 600px) {
        margin-left: 10px; // Margen izquierdo en dispositivos muy pequeños
      }
    }
  }

  // Estilos para imágenes y SVG
  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%; // Ancho completo
    max-width: 100%; // Ancho máximo
    vertical-align: middle; // Alineación vertical media
  }

  // Estilos para imágenes sin alt
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px); // Filtro de desenfoque
  }

  // Estilos para SVG
  svg {
    width: 100%; // Ancho completo
    height: 100%; // Altura completa
    fill: currentColor; // Relleno con el color actual
    vertical-align: middle; // Alineación vertical media

    &.feather {
      fill: none; // Sin relleno
    }
  }

  // Estilos para enlaces
  a {
    display: inline-block; // Display inline-block
    text-decoration: none; // Sin decoración de texto
    text-decoration-skip-ink: auto; // Salto de tinta automático
    color: inherit; // Color heredado
    position: relative; // Posición relativa
    transition: var(--transition); // Transición

    &:hover,
    &:focus {
      color: var(--green); // Color al pasar el ratón o enfocar
    }

    // Clase para enlaces en línea
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink}; // Mezcla de estilos para enlaces en línea
    }
  }

  // Estilos para botones
  button {
    cursor: pointer; // Cursor de puntero
    border: 0; // Sin borde
    border-radius: 0; // Sin radio de borde
  }

  // Estilos para entradas de texto y áreas de texto
  input, textarea {
    border-radius: 0; // Sin radio de borde
    outline: 0; // Sin contorno

    &:focus {
      outline: 0; // Sin contorno al enfocar
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5; // Opacidad del marcador de posición
      }
    }
  }

  // Estilos para párrafos
  p {
    margin: 0 0 15px 0; // Margen

    &:last-child,
    &:last-of-type {
      margin: 0; // Sin margen para el último hijo o tipo
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink}; // Mezcla de estilos para enlaces en línea
    }

    & > code {
      background-color: var(--light-navy); // Color de fondo del código
      color: var(--white); // Color del texto del código
      font-size: var(--fz-sm); // Tamaño de fuente del código
      border-radius: var(--border-radius); // Radio del borde del código
      padding: 0.3em 0.5em; // Relleno del código
    }
  }

  // Estilos para listas
  ul {
    &.fancy-list {
      padding: 0; // Sin relleno
      margin: 0; // Sin margen
      list-style: none; // Sin estilo de lista
      font-size: var(--fz-lg); // Tamaño de fuente
      li {
        position: relative; // Posición relativa
        padding-left: 30px; // Relleno izquierdo
        margin-bottom: 10px; // Margen inferior
        &:before {
          content: '▹'; // Contenido del pseudo-elemento
          position: absolute; // Posición absoluta
          left: 0; // Alineación izquierda
          color: var(--green); // Color del texto
        }
      }
    }
  }

  // Estilos para citas
  blockquote {
    border-left-color: var(--green); // Color del borde izquierdo
    border-left-style: solid; // Estilo del borde izquierdo
    border-left-width: 1px; // Ancho del borde izquierdo
    margin-left: 0px; // Margen izquierdo
    margin-right: 0px; // Margen derecho
    padding-left: 1.5rem; // Relleno izquierdo

    p {
      font-style: italic; // Estilo de fuente italic
      font-size: 24px; // Tamaño de fuente
    }
  }

  // Estilos para líneas horizontales
  hr {
    background-color: var(--lightest-navy); // Color de fondo
    height: 1px; // Altura
    border-width: 0px; // Ancho del borde
    border-style: initial; // Estilo del borde
    border-color: initial; // Color del borde
    border-image: initial; // Imagen del borde
    margin: 1rem; // Margen
  }

  // Estilos para código
  code {
    font-family: var(--font-mono); // Familia de fuentes
    font-size: var(--fz-md); // Tamaño de fuente
  }

  // Estilos para el enlace de salto al contenido
  .skip-to-content {
    ${({ theme }) => theme.mixins.button}; // Mezcla de estilos para botones
    position: absolute; // Posición absoluta
    top: auto; // Alineación superior automática
    left: -999px; // Alineación izquierda fuera de la vista
    width: 1px; // Ancho
    height: 1px; // Altura
    overflow: hidden; // Ocultar desbordamiento
    z-index: -99; // Índice z

    &:hover,
    &:focus {
      background-color: var(--green); // Color de fondo al pasar el ratón o enfocar
      color: var(--navy); // Color del texto al pasar el ratón o enfocar
      top: 0; // Alineación superior
      left: 0; // Alineación izquierda
      width: auto; // Ancho automático
      height: auto; // Altura automática
      overflow: auto; // Desbordamiento automático
      z-index: 99; // Índice z
      box-shadow: none; // Sin sombra de caja
      transform: none; // Sin transformación
    }
  }

  // Estilos para el logo
  #logo {
    color: var(--green); // Color del texto
  }

  // Estilos para el subrayado
  .overline {
    color: var(--green); // Color del texto
    font-family: var(--font-mono); // Familia de fuentes
    font-size: var(--fz-md); // Tamaño de fuente
    font-weight: 400; // Peso de la fuente
  }

  // Estilos para el subtítulo
  .subtitle {
    color: var(--green); // Color del texto
    margin: 0 0 20px 0; // Margen
    font-size: var(--fz-md); // Tamaño de fuente
    font-family: var(--font-mono); // Familia de fuentes
    font-weight: 400; // Peso de la fuente
    line-height: 1.5; // Altura de línea
    @media (max-width: 1080px) {
      font-size: var(--fz-sm); // Tamaño de fuente en dispositivos medianos
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs); // Tamaño de fuente en dispositivos pequeños
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink}; // Mezcla de estilos para enlaces en línea
      line-height: 1.5; // Altura de línea
    }
  }

  // Estilos para la migaja de pan
  .breadcrumb {
    display: flex; // Display flex
    align-items: center; // Alineación de elementos al centro
    margin-bottom: 50px; // Margen inferior
    color: var(--green); // Color del texto

    .arrow {
      display: block; // Display block
      margin-right: 10px; // Margen derecho
      padding-top: 4px; // Relleno superior
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink}; // Mezcla de estilos para enlaces en línea
      font-family: var(--font-mono); // Familia de fuentes
      font-size: var(--fz-sm); // Tamaño de fuente
      font-weight: 600; // Peso de la fuente
      line-height: 1.5; // Altura de línea
      text-transform: uppercase; // Transformación de texto a mayúsculas
      letter-spacing: 0.1em; // Espaciado de letras
    }
  }

  // Estilos para el contenedor de imágenes de Gatsby
  .gatsby-image-outer-wrapper {
    height: 100%; // Altura completa
  }

  // Inclusión de estilos de transición y Prism
  ${TransitionStyles};

  ${PrismStyles};
`;

// Exportación del estilo global
export default GlobalStyle;
