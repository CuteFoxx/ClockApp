import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
      "process.env.VITE_IPDATA_KEY": JSON.stringify(env.VITE_IPDATA_KEY),
      "process.env.VITE_APININJAS_KEY": JSON.stringify(env.VITE_APININJAS_KEY),
    },
    plugins: [react()],
  };
});
