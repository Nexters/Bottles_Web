import { defineConfig, devices } from '@playwright/test';

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
  testDir: './e2e',
  fullyParallel: true,

  reporter: 'html',
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
  ],
});
