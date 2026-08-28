import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hetkijkpunt.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
