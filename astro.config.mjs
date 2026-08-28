import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  site: "https://hetkijkpunt.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
});
