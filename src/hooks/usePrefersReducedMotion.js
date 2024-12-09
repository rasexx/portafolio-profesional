/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import { useState, useEffect } from 'react';

// QUERY: Define la consulta de medios para detectar la preferencia de movimiento reducido
const QUERY = '(prefers-reduced-motion: no-preference)';

// isRenderingOnServer: Verifica si el código se está ejecutando en el servidor
const isRenderingOnServer = typeof window === 'undefined';

// getInitialState: Función para obtener el estado inicial
const getInitialState = () =>
  // Para el renderizado inicial en el servidor, asumimos true
  // Este valor se sobrescribirá en el cliente antes de cualquier animación
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

// usePrefersReducedMotion: Hook personalizado para detectar la preferencia de movimiento reducido
function usePrefersReducedMotion() {
  // Estado: Almacena la preferencia de movimiento reducido
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  // Efecto: Configura un listener para cambios en la preferencia de medios
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = event => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(listener);

    // Limpieza: Elimina el listener cuando el componente se desmonta
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  // Retorna: El valor actual de la preferencia de movimiento reducido
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
