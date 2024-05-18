import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://shiba-lab.github.io",
  base: "/omiya-2024-make-qr-for-seiza",
});
