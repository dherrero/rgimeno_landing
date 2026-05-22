// @ts-check
import { defineConfig } from "astro/config";

// Static portfolio site. Update `site` to the final production URL so that
// canonical links and the sitemap resolve correctly.
export default defineConfig({
  site: "https://ramonaliaga.com",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  // Dev server config. `host: true` exposes it on the network and
  // `allowedHosts: true` lets it be reached through the frp tunnel domain.
  // These only affect `astro dev`, never the static production build.
  server: {
    host: true,
    allowedHosts: true,
  },
});
