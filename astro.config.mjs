import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://blog.i2b.dev",
  integrations: [preact(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
