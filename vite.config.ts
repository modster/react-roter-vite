import { defineConfig, type PluginOption } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno() as PluginOption,
    react() as PluginOption,
    tailwindcss() as PluginOption,
  ],
});
