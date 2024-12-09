import { css } from 'styled-components';

// Definición de colores para el tema de PrismJS
const prismColors = {
  bg: `#112340`,
  lineHighlight: `#1d2d50`,
  blue: `#5ccfe6`,
  purple: `#c3a6ff`,
  green: `#bae67e`,
  yellow: `#ffd580`,
  orange: `#ffae57`,
  red: `#ef6b73`,
  grey: `#a2aabc`,
  comment: `#8695b799`,
};

// Estilos de PrismJS para resaltar código
const PrismStyles = css`
  /**
  * Estilos para el contenedor de resaltado de código
  */
  .gatsby-highlight {
    background-color: ${prismColors.bg};
    color: ${prismColors.grey};
    border-radius: var(--border-radius);
    margin: 2em 0;
    padding: 1.25em;
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--fz-sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  /**
  * Ajustes para el elemento <pre> dentro del contenedor de resaltado
  */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
    padding-top: 2em;
  }

  /* Estilos para los nombres de archivo */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${prismColors.bg};
    color: ${prismColors.grey};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${prismColors.lineHighlight};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Resaltado de líneas de código */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${prismColors.lineHighlight};
    border-left: 2px solid var(--green);
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  /* Insignias de lenguaje */
  .gatsby-highlight pre[class*='language-']::before {
    background: var(--lightest-navy);
    color: var(--white);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }
  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
  }

  /* Estilos de PrismJS para tokens */
  .token {
    display: inline;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }
  .token.punctuation {
    color: ${prismColors.grey};
  }
  .token.namespace,
  .token.deleted {
    color: ${prismColors.red};
  }
  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${prismColors.yellow};
  }
  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${prismColors.orange};
  }
  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${prismColors.purple};
  }
  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${prismColors.blue};
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${prismColors.green};
  }
  .token.important,
  .token.bold {
    font-weight: 600;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
`;

export default PrismStyles;
