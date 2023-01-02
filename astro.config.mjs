import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["astro-google-fonts-optimizer"],
    },
  },
  integrations: [tailwind()],
  output: "server",
  adapter: node({ mode: "standalone" }),
});
