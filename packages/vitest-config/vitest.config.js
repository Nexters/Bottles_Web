import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import magicalSvg from 'vite-plugin-magical-svg';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [react(), magicalSvg({ target: 'react' })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup/setup.ts',
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src'),
    },
  },
});
