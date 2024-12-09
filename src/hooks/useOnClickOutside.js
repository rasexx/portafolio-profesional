import { useEffect } from 'react';

// Hook personalizado para detectar clics fuera de un elemento
const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      // LISTENER: Función que maneja el evento de clic
      const listener = event => {
        // VERIFICACIÓN: No hacer nada si se hace clic en el elemento de referencia o sus descendientes
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      // SUSCRIPCIÓN: Agregar event listeners para mousedown y touchstart
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      // LIMPIEZA: Función de limpieza para remover los event listeners
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // DEPENDENCIAS: Agregar ref y handler a las dependencias del efecto
    [ref, handler],
  );
};

export default useOnClickOutside;
