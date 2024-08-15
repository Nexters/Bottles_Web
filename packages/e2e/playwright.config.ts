import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
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
  fullyParallel: true,
  reporter: 'html',
  projects: [
    {
      name: 'webkit',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Galaxy Note 3'] },
    },
  ],
});
