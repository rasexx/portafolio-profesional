import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

// Estilos para la sección de contacto
const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

// Componente de Contacto
const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Efecto para revelar el contenedor con animación
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">¿Que sigue?</h2>

      <h2 className="title">¡Contactame!</h2>

      <p>
        Estoy siempre disponible y dispuesto a colaborar en cualquier proyecto o empleo que puedas
        tener en mente. Si necesitas asesoramiento, tienes alguna pregunta o simplemente quieres
        saludar y compartir un comentario, ¡no dudes en hacerlo! Estoy aquí para ti. ¿Qué esperas?
      </p>

      <a className="email-link" href={email}>
        ¡Hablemos!
      </a>
    </StyledContactSection>
  );
};

export default Contact;
