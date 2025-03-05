/**
 * This module sets up global hooks for Playwright tests.
 * 
 * The `beforeEach` hook sets the session name for BrowserStack based on the test title.
 * 
 * The `afterEach` hook performs the following actions:
 * - If the test fails, it takes a screenshot and saves it to the `screenshots` directory.
 * - It sets the session status on BrowserStack based on the test result.
 * 
 * @module global-hooks
 */
import { test, expect } from "@playwright/test";
import { WireMock } from "wiremock";

// Start WireMock before tests
test.beforeAll(async () => {
  await WireMock.start({ port: 8080 });
});

// Stop WireMock after tests
test.afterAll(async () => {
  await WireMock.stop();
});

export default test;
