// @ts-ignore
// @ts-ignore
import path from "node:path";
import {defineConfig, devices} from "@playwright/test";


export const config =  {
  //testDir: testDirectory,
  /* Run tests in files in parallel */
  fullyParallel: true,
  // Each test is given 60 seconds.
   timeout: 60000,
  // forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html", { open: "never" }],
    ["list"],
    ['playwright-ctrf-json-reporter', {
      testType: 'e2e',
      outputDir: './test-results',
      outputFile: 'ctrf-report.json'
    }],
    ['monocart-reporter', {
      name: 'Test Automation Report'.toUpperCase(),
      outputFile: './playwright-report/energyTestResults.html'
      }
    ]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : 'URL',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    /* Specify what is the test id of the element */
    testIdAttribute: "id",

    /* Enable capture screen shot when test fail */
    screenshot: "only-on-failure",
    video: 'retain-on-failure',
    artifactsPath: path.resolve(__dirname, 'test-results/videos'),
 
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 }
       },
    }
  ],
};
// @ts-ignore
export default defineConfig(config);