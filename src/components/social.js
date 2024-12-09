// Importaciones necesarias
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

// ESTILO: Lista de redes sociales
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  // ESTILO: Línea vertical después de la lista
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  // ESTILO: Elementos de la lista
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    // ESTILO: Enlaces de redes sociales
    a {
      padding: 10px;

      // ESTILO: Efecto hover en los enlaces
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      // ESTILO: Iconos de redes sociales
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

// COMPONENTE: Social
const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

// PROP TYPES: Validación de propiedades
Social.propTypes = {
  isHome: PropTypes.bool,
};

// Exportación del componente
export default Social;
