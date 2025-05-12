import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

// Estilos para la sección "Sobre mí"
const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

// Estilos para el texto de la sección "Sobre mí"
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

// Estilos para la imagen de la sección "Sobre mí"
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

// Componente de la sección "Sobre mí"
const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Efecto para revelar el contenedor con animación
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Lista de habilidades
  const skills = ['T.I.', 'Inteligencia Artificial', 'Ciberseguridad', 'Emprendimiento'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre mi</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Soy un internauta desde que tengo uso de razón y mi conocimiento se construye en base
              a la ciencia y la tecnología. Mi interés en la ingeniería de sistemas inició a
              principios del año 2023, luego de una temporada trabajando en el sector del turismo y
              la hotelería enfocado en la atención y el servicio al cliente.
            </p>

            <p>
              Mis mayores intereses desde niño, han sido la tecnología y la ciencia. Sin embargo, no
              fue hasta el lanzamiento de los{' '}
              <a
                href="https://platform.openai.com/docs/deprecations"
                target="_blank"
                rel="noreferrer">
                {' '}
                primeros modelos de ChatGPT
              </a>{' '}
              cuando me motive a realizar un cambio en mi rumbo profesional, luego de experimentar
              con el prompt engineering para crear código en lenguaje{' '}
              <a
                href="https://es.tradingview.com/support/solutions/43000561836"
                target="_blank"
                rel="noreferrer">
                PineScript®
              </a>{' '}
              para indicadores y estrategias de trading con criptomonedas; esto terminó por
              convencerme de que debía realizar un cambio en mi vida, tomando lo aprendido en mis
              labores anteriores para impulsar mi camino profesional en la industria tecnológica.
            </p>

            <p>
              Mis inicios se remontan a mi infancia y adolescencia; rodeado de instrumentos
              musicales, libros y hardware computacional; con una familia de músicos, ingenieros y
              diseñadores, lo que sembró en mi persona una inmensa curiosidad intelectual y
              posteriormente; llevándome a ser una persona curiosa y analítica.
            </p>

            <p>
              En mis actividades a lo largo del tiempo, he logrado adquirir conocimientos basados
              en:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
