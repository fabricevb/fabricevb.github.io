import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fabricevanboeckel.com",
  output: "static",
  build: {
    format: "directory"
  }
});
