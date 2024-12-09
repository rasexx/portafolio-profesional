// Importación de módulos y componentes necesarios
import React, { useState, useEffect } from 'react'; // Importación de React y hooks
import PropTypes from 'prop-types'; // Importación de PropTypes para validación de tipos
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Importación de componentes de transición
import styled from 'styled-components'; // Importación de styled-components para estilos
import { loaderDelay } from '@utils'; // Importación de la utilidad loaderDelay
import { usePrefersReducedMotion } from '@hooks'; // Importación del hook para preferencia de movimiento reducido

// Definición de estilos para el elemento lateral
const StyledSideElement = styled.div`
  width: 40px; // Ancho del elemento
  position: fixed; // Posición fija
  bottom: 0; // Alineación inferior
  left: ${props =>
    props.orientation === 'left' ? '40px' : 'auto'}; // Alineación izquierda condicional
  right: ${props =>
    props.orientation === 'left' ? 'auto' : '40px'}; // Alineación derecha condicional
  z-index: 10; // Índice z
  color: var(--light-slate); // Color del texto

  @media (max-width: 1080px) {
    left: ${props =>
    props.orientation === 'left'
      ? '20px'
      : 'auto'}; // Alineación izquierda en dispositivos medianos
    right: ${props =>
    props.orientation === 'left'
      ? 'auto'
      : '20px'}; // Alineación derecha en dispositivos medianos
  }

  @media (max-width: 768px) {
    display: none; // Ocultar en dispositivos pequeños
  }
`;

// Definición del componente Side
const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome); // Estado para montar el componente
  const prefersReducedMotion = usePrefersReducedMotion(); // Preferencia de movimiento reducido

  // Efecto para montar el componente con retraso
  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay); // Retraso para montar el componente
    return () => clearTimeout(timeout); // Limpieza del temporizador
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</> // Renderizado de hijos sin transición
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};

// Validación de tipos para las props del componente
Side.propTypes = {
  children: PropTypes.node.isRequired, // Hijos requeridos
  isHome: PropTypes.bool, // Indicador de página principal
  orientation: PropTypes.string, // Orientación del elemento
};

// Exportación del componente Side
export default Side;
