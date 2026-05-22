/**
 * Single source of truth for all editable copy on the site.
 *
 * All user-facing strings live here in Spanish so the site owner can update
 * text without touching markup. Replace every value marked with `// TODO:`
 * with the real information before publishing.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  /** Stable id, used for anchors and aria labels. */
  id: string;
  title: string;
  /** Short role/context line shown under the title. */
  role: string;
  year: string;
  /** One-paragraph case-study summary. */
  summary: string;
  /** Outcome bullets (impact, metrics, accessibility wins). */
  highlights: string[];
  /** Topic tags. */
  tags: string[];
  /** Optional external case-study link. */
  link?: { href: string; label: string };
}

export interface Principle {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Accessible label for screen readers. */
  ariaLabel: string;
}

export const site = {
  /** Used in <title>, og:site_name and the document lang. */
  name: "Ramón Aliaga",
  lang: "es",
  /** Production URL — keep in sync with `site` in astro.config.mjs. */
  url: "https://ramonaliaga.com",
  role: "Product Designer · Especialista en accesibilidad",
  description:
    "Ramón Aliaga, product designer especializado en accesibilidad. Diseño productos digitales usables para todas las personas, conformes con WCAG y centrados en el impacto real.",
};

export const hero = {
  // TODO: confirm the exact greeting/tagline with Ramón.
  eyebrow: "Product Designer · Accesibilidad",
  heading: "Diseño productos digitales que funcionan para todas las personas.",
  subheading:
    "Soy Ramón Aliaga. Ayudo a equipos a construir experiencias accesibles, inclusivas y conformes con los estándares WCAG, sin renunciar a una estética cuidada.",
  primaryCta: { label: "Ver proyectos", href: "#proyectos" },
  secondaryCta: { label: "Hablemos", href: "#contacto" },
  // Quick credibility stats. TODO: replace with real figures.
  stats: [
    { value: "+8", label: "años diseñando producto" },
    { value: "WCAG 2.2", label: "nivel AA como estándar" },
    { value: "+40", label: "productos auditados" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const about = {
  heading: "Sobre mí",
  // TODO: replace with Ramón's real biography.
  paragraphs: [
    "Llevo más de ocho años diseñando producto digital, los últimos centrados en accesibilidad e inclusión. Mi trabajo parte de una idea sencilla: un producto no está terminado si deja a alguien fuera.",
    "Acompaño a equipos de producto, diseño y desarrollo a integrar la accesibilidad desde el primer boceto hasta el código —auditorías WCAG, sistemas de diseño accesibles, pruebas con usuarios reales y formación interna.",
    "Creo en el diseño con evidencia: investigación, prototipado y validación con personas con distintas capacidades, dispositivos y contextos de uso.",
  ],
  // TODO: replace with a real, descriptive alt text for Ramón's photo.
  photoAlt: "Retrato de Ramón Aliaga sonriendo, sobre fondo neutro.",
};

export const principles: Principle[] = [
  {
    title: "Accesibilidad desde el origen",
    description:
      "Integro criterios WCAG y diseño inclusivo desde la primera fase, no como un parche al final del proyecto.",
  },
  {
    title: "Decisiones con evidencia",
    description:
      "Investigación y pruebas con usuarios reales —incluidas personas con discapacidad— para validar cada decisión de diseño.",
  },
  {
    title: "Sistemas, no parches",
    description:
      "Componentes y patrones accesibles documentados que escalan a todo el producto y a todo el equipo.",
  },
  {
    title: "Diseño y desarrollo de la mano",
    description:
      "Especifico estados, foco, roles ARIA y semántica para que lo accesible llegue intacto al producto final.",
  },
];

export const projects: Project[] = [
  // TODO: replace these placeholder case studies with Ramón's real work.
  {
    id: "banca-inclusiva",
    title: "Rediseño accesible de banca móvil",
    role: "Lead Product Designer",
    year: "2024",
    summary:
      "Rediseño integral de la app de banca móvil de una entidad nacional con la accesibilidad como requisito de negocio. Auditoría WCAG 2.2 AA, nuevo sistema de componentes accesibles y validación con personas usuarias de lectores de pantalla.",
    highlights: [
      "Conformidad WCAG 2.2 AA verificada en los flujos críticos",
      "+27% en tasa de finalización de tareas en pruebas con usuarios",
      "Sistema de 60+ componentes accesibles documentados",
    ],
    tags: ["WCAG 2.2", "Design System", "App móvil", "Investigación"],
    link: { href: "#contacto", label: "Solicitar el caso completo" },
  },
  {
    id: "salud-publica",
    title: "Portal de salud pública para todas las edades",
    role: "Product Designer",
    year: "2023",
    summary:
      "Diseño de un portal de servicios sanitarios usado por una población muy diversa en edad y alfabetización digital. Foco en lenguaje claro, navegación por teclado y compatibilidad con tecnologías de apoyo.",
    highlights: [
      "Lenguaje claro validado con usuarios mayores",
      "Navegación completa por teclado y lectores de pantalla",
      "Reducción del 35% en errores de formulario",
    ],
    tags: ["Lenguaje claro", "Formularios", "Investigación", "Web"],
    link: { href: "#contacto", label: "Solicitar el caso completo" },
  },
  {
    id: "design-system",
    title: "Sistema de diseño accesible para SaaS B2B",
    role: "Design Systems Lead",
    year: "2022",
    summary:
      "Construcción del sistema de diseño de una plataforma SaaS con la accesibilidad como criterio de aceptación. Tokens de color con contraste garantizado, documentación de estados de foco y guías para el equipo de desarrollo.",
    highlights: [
      "Paleta con contraste AA garantizado por tokens",
      "Documentación de foco, estados y roles ARIA por componente",
      "Adoptado por 5 equipos de producto",
    ],
    tags: ["Design System", "Tokens", "Documentación", "ARIA"],
    link: { href: "#contacto", label: "Solicitar el caso completo" },
  },
];

export const services: Service[] = [
  {
    title: "Auditorías de accesibilidad",
    description:
      "Evaluación WCAG 2.2 de tu producto web o app, con informe priorizado y recomendaciones accionables.",
  },
  {
    title: "Diseño de producto",
    description:
      "Diseño de interfaces y flujos completos con la accesibilidad y la usabilidad integradas desde el inicio.",
  },
  {
    title: "Sistemas de diseño accesibles",
    description:
      "Creación o mejora de design systems con componentes, tokens y documentación accesibles por defecto.",
  },
  {
    title: "Formación y mentoría",
    description:
      "Talleres y acompañamiento para que tu equipo diseñe y desarrolle de forma accesible de manera autónoma.",
  },
];

export const testimonials: Testimonial[] = [
  // TODO: replace with real testimonials (with permission).
  {
    quote:
      "Ramón cambió la forma en la que entendemos la accesibilidad: dejó de ser una casilla que marcar para convertirse en parte de cómo diseñamos.",
    author: "Nombre Apellido",
    role: "Head of Product, Empresa",
  },
  {
    quote:
      "Su trabajo elevó la calidad de todo el equipo. La documentación que dejó sigue siendo nuestra referencia.",
    author: "Nombre Apellido",
    role: "Engineering Manager, Empresa",
  },
];

export const contact = {
  heading: "¿Construimos algo accesible?",
  description:
    "Cuéntame en qué estás trabajando. Respondo a propuestas de proyecto, colaboraciones y charlas sobre accesibilidad y diseño inclusivo.",
  // TODO: replace with Ramón's real email.
  email: "hola@ramonaliaga.com",
  emailLabel: "Escríbeme un correo",
};

export const socials: SocialLink[] = [
  // TODO: confirm the real profile URLs.
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ramonaliaga",
    ariaLabel: "Perfil de LinkedIn de Ramón Aliaga (se abre en una nueva pestaña)",
  },
  {
    label: "Email",
    href: "mailto:hola@ramonaliaga.com",
    ariaLabel: "Enviar un correo a Ramón Aliaga",
  },
];
