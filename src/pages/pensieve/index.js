// Importación de módulos y componentes necesarios
import React from 'react'; // Importación de React
import { graphql, Link } from 'gatsby'; // Importación de GraphQL y Link de Gatsby
import kebabCase from 'lodash/kebabCase'; // Importación de la función kebabCase de Lodash
import PropTypes from 'prop-types'; // Importación de PropTypes para validación de tipos
import { Helmet } from 'react-helmet'; // Importación de Helmet para gestión de metadatos
import styled from 'styled-components'; // Importación de styled-components para estilos
import { Layout } from '@components'; // Importación del componente Layout
import { IconBookmark } from '@components/icons'; // Importación del componente IconBookmark

// Definición de estilos para el contenedor principal
const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px; // Margen inferior del encabezado
    text-align: center; // Alineación del texto al centro

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto; // Cursor personalizado al pasar el ratón o enfocar
      }
    }
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween}; // Mezcla de estilos para flex entre
    width: 100%; // Ancho completo
    margin-top: 20px; // Margen superior
  }
`;

// Definición de estilos para la cuadrícula
const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList}; // Mezcla de estilos para resetear la lista
  display: grid; // Display de tipo grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); // Columnas de la cuadrícula
  grid-gap: 15px; // Espacio entre elementos de la cuadrícula
  margin-top: 50px; // Margen superior
  position: relative; // Posición relativa

  @media (max-width: 1080px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    ); // Columnas de la cuadrícula en dispositivos medianos
  }
`;

// Definición de estilos para los posts
const StyledPost = styled.li`
  transition: var(--transition); // Transición
  cursor: default; // Cursor por defecto

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px); // Transformación al pasar el ratón o enfocar
      }
    }
  }

  a {
    position: relative; // Posición relativa
    z-index: 1; // Índice z
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow}; // Mezcla de estilos para sombra de caja
    ${({ theme }) => theme.mixins.flexBetween}; // Mezcla de estilos para flex entre
    flex-direction: column; // Dirección de flex column
    align-items: flex-start; // Alineación de elementos al inicio
    position: relative; // Posición relativa
    height: 100%; // Altura completa
    padding: 2rem 1.75rem; // Relleno
    border-radius: var(--border-radius); // Radio del borde
    transition: var(--transition); // Transición
    background-color: var(--light-navy); // Color de fondo

    header,
    a {
      width: 100%; // Ancho completo
    }
  }

  .post__icon {
    ${({ theme }) => theme.mixins.flexBetween}; // Mezcla de estilos para flex entre
    color: var(--green); // Color del icono
    margin-bottom: 30px; // Margen inferior
    margin-left: -5px; // Margen izquierdo

    svg {
      width: 40px; // Ancho del SVG
      height: 40px; // Altura del SVG
    }
  }

  .post__title {
    margin: 0 0 10px; // Margen
    color: var(--lightest-slate); // Color del título
    font-size: var(--fz-xxl); // Tamaño de fuente del título

    a {
      position: static; // Posición estática

      &:before {
        content: ''; // Contenido vacío
        display: block; // Display block
        position: absolute; // Posición absoluta
        z-index: 0; // Índice z
        width: 100%; // Ancho completo
        height: 100%; // Altura completa
        top: 0; // Alineación superior
        left: 0; // Alineación izquierda
      }
    }
  }

  .post__desc {
    color: var(--light-slate); // Color de la descripción
    font-size: 17px; // Tamaño de fuente de la descripción
  }

  .post__date {
    color: var(--light-slate); // Color de la fecha
    font-family: var(--font-mono); // Familia de fuentes de la fecha
    font-size: var(--fz-xxs); // Tamaño de fuente de la fecha
    text-transform: uppercase; // Transformación de texto a mayúsculas
  }

  ul.post__tags {
    display: flex; // Display flex
    align-items: flex-end; // Alineación de elementos al final
    flex-wrap: wrap; // Envolver elementos
    padding: 0; // Sin relleno
    margin: 0; // Sin margen
    list-style: none; // Sin estilo de lista

    li {
      color: var(--green); // Color de las etiquetas
      font-family: var(--font-mono); // Familia de fuentes de las etiquetas
      font-size: var(--fz-xxs); // Tamaño de fuente de las etiquetas
      line-height: 1.75; // Altura de línea de las etiquetas

      &:not(:last-of-type) {
        margin-right: 15px; // Margen derecho entre etiquetas
      }
    }
  }
`;

// Definición del componente PensievePage
const PensievePage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges; // Obtención de posts desde los datos

  return (
    <Layout location={location}>
      <Helmet title="Pensieve" /> {/* Configuración del título de la página */}
      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Pensieve</h1> {/* Título de la página */}
          <p className="subtitle">
            <a href="https://www.wizardingworld.com/writing-by-jk-rowling/pensieve">
              a collection of memories {/* Subtítulo de la página */}
            </a>
          </p>
        </header>

        <StyledGrid>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date, tags } = frontmatter;
              const formattedDate = new Date(date).toLocaleDateString(); // Formateo de la fecha

              return (
                <StyledPost key={i}>
                  <div className="post__inner">
                    <header>
                      <div className="post__icon">
                        <IconBookmark /> {/* Icono del post */}
                      </div>
                      <h5 className="post__title">
                        <Link to={slug}>{title}</Link> {/* Título del post */}
                      </h5>
                      <p className="post__desc">{description}</p> {/* Descripción del post */}
                    </header>

                    <footer>
                      <span className="post__date">{formattedDate}</span> {/* Fecha del post */}
                      <ul className="post__tags">
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link to={`/pensieve/tags/${kebabCase(tag)}/`} className="inline-link">
                              #{tag} {/* Etiquetas del post */}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </StyledPost>
              );
            })}
        </StyledGrid>
      </StyledMainContainer>
    </Layout>
  );
};

// Validación de tipos para las props del componente
PensievePage.propTypes = {
  location: PropTypes.object.isRequired, // Ubicación requerida
  data: PropTypes.object.isRequired, // Datos requeridos
};

// Exportación del componente PensievePage
export default PensievePage;

// Consulta GraphQL para obtener los datos de los posts
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;
