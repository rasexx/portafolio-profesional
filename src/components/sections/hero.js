import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

// Estilos para la sección del héroe
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

// Componente del Héroe
const Hero = () => {
  // Estado para verificar si el componente está montado
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Efecto para montar el componente con un retraso
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  // Elementos a renderizar
  const one = <h1>Hola, mi nombre es</h1>;
  const two = <h2 className="big-heading">Jose Ramon Garcia</h2>;
  const three = <h3 className="big-heading">y solucióno problemas con tecnología.</h3>;
  const four = (
    <>
      <p>
        Soy estudiante de Ingeniería de Sistemas, tengo un perfil integral y multidisciplinario
        enfocado en desarrollar soluciones basadas en tecnología y las ciencias informáticas. Mi
        objetivo es combinar conocimientos técnicos con mi creatividad para resolver problemas de
        manera eficiente y contribuir al progreso tecnológico mientras estudio en la{' '}
        <a href="https://www.uninorte.edu.co/" target="_blank" rel="noreferrer">
          Universidad del Norte
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="#about">
      Mas info sobre mi
    </a>
  );

  // Arreglo de elementos a renderizar
  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
