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
});
