// Sección de importaciones
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@config';
import { Side } from '@components';

// Sección de estilos con styled-components
const StyledLinkWrapper = styled.div`
  // Propiedades de estilo para el contenedor del enlace
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  // Estilo para el pseudo-elemento :after
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  // Propiedades de estilo para el enlace
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    // Estilos para el enlace al hacer hover o recibir el foco
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

// Componente de Email
const Email = ({ isHome }) => (
  // Uso del componente Side para mostrar el enlace al correo electrónico
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

// Propiedades de tipo para el componente Email
Email.propTypes = {
  isHome: PropTypes.bool,
};

// Exportación del componente Email
export default Email;
