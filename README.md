# Portfolio de Ramón Aliaga

Web estática del portfolio personal de **Ramón Aliaga**, product designer especializado en
accesibilidad. Construida con [Astro](https://astro.build): genera HTML estático, sin JavaScript
innecesario, lista para desplegar en cualquier hosting de archivos estáticos.

El propio sitio es una demostración de accesibilidad: HTML semántico, navegación por teclado,
contraste conforme con WCAG 2.2 AA, modo claro/oscuro y respeto por `prefers-reduced-motion`.

## Requisitos

- [Node.js](https://nodejs.org) 18.20 o superior (recomendado 20+)
- npm (incluido con Node)

## Puesta en marcha

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # comprobación de tipos + build estático en dist/
npm run preview    # previsualizar el build de producción
npm run format     # formatear el código con Prettier
```

## Cómo personalizar el contenido

Casi todo el texto vive en un único archivo, pensado para editarse sin tocar el maquetado:

> **`src/data/content.ts`**

Ahí puedes cambiar el nombre, el titular, la biografía, los proyectos, los servicios, los
testimonios y los datos de contacto. Las líneas marcadas con `// TODO:` señalan los datos de
ejemplo que conviene sustituir por información real antes de publicar.

### Checklist antes de publicar

- [ ] Revisar el nombre y el titular en `hero` y `site`.
- [ ] Escribir la biografía real en `about`.
- [ ] Sustituir los **proyectos de ejemplo** por casos reales en `projects`.
- [ ] Actualizar el **email** y los enlaces de **redes** (`contact`, `socials`).
- [ ] Reemplazar los **testimonios** de ejemplo (con permiso de quien los firma).
- [ ] Cambiar la **URL de producción** en `astro.config.mjs` y en `site.url`.

### Añadir la foto de Ramón

1. Copia la imagen en la carpeta `public/` (por ejemplo `public/ramon.jpg`).
2. En `src/components/About.astro`, sustituye el bloque `.about__placeholder` por:

   ```astro
   <img src="/ramon.jpg" alt={about.photoAlt} width="480" height="600" />
   ```

3. Ajusta el texto alternativo en `about.photoAlt` (`src/data/content.ts`) para que describa la
   imagen de forma útil.

## Accesibilidad incluida

- Estructura semántica con regiones (`header`, `main`, `nav`, `footer`) y encabezados jerárquicos.
- Enlace «Saltar al contenido» para usuarios de teclado.
- Foco siempre visible y de alto contraste (`:focus-visible`).
- Paleta de color con contraste conforme a WCAG 2.2 AA en modo claro y oscuro.
- Conmutador de tema con `aria-pressed` y persistencia en `localStorage`.
- Menú móvil con `aria-expanded` y cierre con la tecla `Escape`.
- Animaciones desactivadas si el sistema pide `prefers-reduced-motion`.
- Imagen social (Open Graph) y metadatos para compartir en redes.

## Despliegue

`npm run build` genera la carpeta `dist/` con HTML estático. Puedes subirla a cualquier hosting de
estáticos. Opciones recomendadas, todas con plan gratuito:

- **Netlify** / **Vercel** / **Cloudflare Pages**: conecta el repositorio y usa
  `npm run build` como comando y `dist` como carpeta de salida.
- **GitHub Pages**: publica el contenido de `dist/`.

Recuerda actualizar la URL de producción en `astro.config.mjs` para que el `canonical`, el
`sitemap` y la imagen social apunten al dominio correcto.
