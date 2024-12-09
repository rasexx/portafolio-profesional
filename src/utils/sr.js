// Importa la librería ScrollReveal
import ScrollReveal from 'scrollreveal';

// Verifica si es Server-Side Rendering (SSR)
const isSSR = typeof window === 'undefined';

// Inicializa ScrollReveal si no es SSR
const sr = isSSR ? null : ScrollReveal();

// Exporta la instancia de ScrollReveal
export default sr;
