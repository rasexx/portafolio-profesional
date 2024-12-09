// Constantes para definir las direcciones de desplazamiento
const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

import { useState, useEffect } from 'react';

// HOOK: useScrollDirection
const useScrollDirection = ({ initialDirection, thresholdPixels, off } = {}) => {
  // ESTADO: Dirección actual del desplazamiento
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    // CONFIGURACIÓN: Umbral y variables de seguimiento
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    // FUNCIÓN: Actualizar dirección del desplazamiento
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // No se ha superado el umbral
        ticking = false;
        return;
      }

      // ACTUALIZACIÓN: Determinar y establecer la dirección del desplazamiento
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    // MANEJADOR: Evento de desplazamiento
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    // ACTIVACIÓN: Agregar o remover el evento de desplazamiento
    !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

    // LIMPIEZA: Remover el evento al desmontar
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  // RETORNO: Dirección actual del desplazamiento
  return scrollDir;
};

export default useScrollDirection;
