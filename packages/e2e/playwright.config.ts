import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    timeout: 10 * 1000,
    reuseExistingServer: true,
    stdout: 'ignore',
    stderr: 'pipe',
  },
  testDir: './tests',
  timeout: 30000,
  fullyParallel: false,

  retries: 2,
  workers: 1,

  reporter: 'html',
});
