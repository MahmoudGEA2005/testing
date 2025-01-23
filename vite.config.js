import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/testing/", // Replace <repo> with the name of your GitHub repository
});
