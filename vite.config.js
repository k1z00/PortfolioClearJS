import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inspect from 'vite-plugin-inspect';



export default defineConfig({
  plugins: [ inspect(), vue()],
  base: '/PortfolioClearJS/'
});

