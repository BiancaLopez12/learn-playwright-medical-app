import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: './tests/utils/global.setup.ts',
  globalTeardown: './tests/utils/global.teardown.ts',
  testDir: './tests',

  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000, // 2 minutos
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: false,
      },
    },
  ],
});
