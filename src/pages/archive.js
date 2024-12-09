// Importación de módulos y componentes necesarios
import React, { useRef, useEffect } from 'react'; // Importación de React y hooks
import { graphql } from 'gatsby'; // Importación de GraphQL de Gatsby
import PropTypes from 'prop-types'; // Importación de PropTypes para validación de tipos
import { Helmet } from 'react-helmet'; // Importación de Helmet para gestión de metadatos
import styled from 'styled-components'; // Importación de styled-components para estilos
import { srConfig } from '@config'; // Importación de configuración de revelación suave
import sr from '@utils/sr'; // Importación de utilidad de revelación suave
import { Layout } from '@components'; // Importación del componente Layout
import { Icon } from '@components/icons'; // Importación del componente Icon
import { usePrefersReducedMotion } from '@hooks'; // Importación de hook para preferencia de movimiento reducido

// Definición de estilos para el contenedor de la tabla
const StyledTableContainer = styled.div`
  margin: 100px -20px; // Margen del contenedor

  @media (max-width: 768px) {
    margin: 50px -10px; // Margen en dispositivos pequeños
  }

  table {
    width: 100%; // Ancho completo de la tabla
    border-collapse: collapse; // Colapso de bordes

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none; // Ocultar en dispositivos pequeños
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy); // Color de fondo al pasar el ratón o enfocar
      }
    }

    th,
    td {
      padding: 10px; // Relleno
      text-align: left; // Alineación del texto

      &:first-child {
        padding-left: 20px; // Relleno izquierdo del primer hijo

        @media (max-width: 768px) {
          padding-left: 10px; // Relleno izquierdo en dispositivos pequeños
        }
      }
      &:last-child {
        padding-right: 20px; // Relleno derecho del último hijo

        @media (max-width: 768px) {
          padding-right: 10px; // Relleno derecho en dispositivos pequeños
        }
      }

      svg {
        width: 20px; // Ancho del SVG
        height: 20px; // Altura del SVG
      }
    }

    tr {
      cursor: default; // Cursor por defecto

      td:first-child {
        border-top-left-radius: var(--border-radius); // Radio del borde superior izquierdo
        border-bottom-left-radius: var(--border-radius); // Radio del borde inferior izquierdo
      }
      td:last-child {
        border-top-right-radius: var(--border-radius); // Radio del borde superior derecho
        border-bottom-right-radius: var(--border-radius); // Radio del borde inferior derecho
      }
    }

    td {
      &.year {
        padding-right: 20px; // Relleno derecho del año

        @media (max-width: 768px) {
          padding-right: 10px; // Relleno derecho en dispositivos pequeños
          font-size: var(--fz-sm); // Tamaño de fuente en dispositivos pequeños
        }
      }

      &.title {
        padding-top: 15px; // Relleno superior del título
        padding-right: 20px; // Relleno derecho del título
        color: var(--lightest-slate); // Color del título
        font-size: var(--fz-xl); // Tamaño de fuente del título
        font-weight: 600; // Peso de la fuente del título
        line-height: 1.25; // Altura de línea del título
      }

      &.company {
        font-size: var(--fz-lg); // Tamaño de fuente de la compañía
        white-space: nowrap; // Sin espacio en blanco
      }

      &.tech {
        font-size: var(--fz-xxs); // Tamaño de fuente de la tecnología
        font-family: var(--font-mono); // Familia de fuentes de la tecnología
        line-height: 1.5; // Altura de línea de la tecnología
        .separator {
          margin: 0 5px; // Margen del separador
        }
        span {
          display: inline-block; // Display inline-block
        }
      }

      &.links {
        min-width: 100px; // Ancho mínimo de los enlaces

        div {
          display: flex; // Display flex
          align-items: center; // Alineación de elementos al centro

          a {
            ${({ theme }) => theme.mixins.flexCenter}; // Mezcla de estilos para centrar flex
            flex-shrink: 0; // Sin encogimiento flex
          }

          a + a {
            margin-left: 10px; // Margen izquierdo entre enlaces
          }
        }
      }
    }
  }
`;

// Definición del componente ArchivePage
const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges; // Obtención de proyectos desde los datos
  const revealTitle = useRef(null); // Referencia para el título
  const revealTable = useRef(null); // Referencia para la tabla
  const revealProjects = useRef([]); // Referencia para los proyectos
  const prefersReducedMotion = usePrefersReducedMotion(); // Preferencia de movimiento reducido

  // Efecto para revelar elementos suavemente
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig()); // Revelación del título
    sr.reveal(revealTable.current, srConfig(200, 0)); // Revelación de la tabla
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10))); // Revelación de los proyectos
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Archive" /> {/* Configuración del título de la página */}
      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1> {/* Título de la página */}
          <p className="subtitle">A big list of things I’ve worked on</p>{' '}
          {/* Subtítulo de la página */}
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th> {/* Encabezado del año */}
                <th>Title</th> {/* Encabezado del título */}
                <th className="hide-on-mobile">Made at</th>{' '}
                {/* Encabezado de la compañía (oculto en móviles) */}
                <th className="hide-on-mobile">Built with</th>{' '}
                {/* Encabezado de la tecnología (oculto en móviles) */}
                <th>Link</th> {/* Encabezado del enlace */}
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const {
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                  } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>{' '}
                      {/* Año del proyecto */}
                      <td className="title">{title}</td> {/* Título del proyecto */}
                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}{' '}
                        {/* Compañía del proyecto (oculto en móviles) */}
                      </td>
                      <td className="tech hide-on-mobile">
                        {tech?.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}{' '}
                              {/* Tecnología del proyecto (oculto en móviles) */}
                            </span>
                          ))}
                      </td>
                      <td className="links">
                        <div>
                          {external && (
                            <a href={external} aria-label="External Link">
                              <Icon name="External" /> {/* Enlace externo */}
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" /> {/* Enlace a GitHub */}
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label="Apple App Store Link">
                              <Icon name="AppStore" /> {/* Enlace a Apple App Store */}
                            </a>
                          )}
                          {android && (
                            <a href={android} aria-label="Google Play Store Link">
                              <Icon name="PlayStore" /> {/* Enlace a Google Play Store */}
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

// Validación de tipos para las props del componente
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired, // Ubicación requerida
  data: PropTypes.object.isRequired, // Datos requeridos
};

// Exportación del componente ArchivePage
export default ArchivePage;

// Consulta GraphQL para obtener los datos de los proyectos
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;
