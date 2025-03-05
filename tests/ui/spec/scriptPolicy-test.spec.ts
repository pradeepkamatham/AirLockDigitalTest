import { test, expect, Page } from '@playwright/test';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import path from 'node:path';
import { ScriptControlPageActions } from '../pageObjects/ScriptControlPageActions';

const PROJECT_DIR = path.resolve(__dirname);
const TEST_SCRIPT = path.join(PROJECT_DIR, "tests/utils/appData", "script.msi");
const LOG_FILE_PATH = path.join(PROJECT_DIR, "agent.log");

test.describe('Script Control Policy Tests', () => {
    test('Validate script execution policy enforcement', async ({ page }) => {
        const scriptControlPageActions = new ScriptControlPageActions(page);

        await test.step('Login to the Web Application', async () => {
            await scriptControlPageActions.login('admin', 'password');
        });

        await test.step('Navigate to Policy Management', async () => {
            await scriptControlPageActions.navigateToPolicyManagement();
        });

        await test.step('Configure Policy', async () => {
            await scriptControlPageActions.configurePolicy();
        });

        await test.step('Save and Deploy Policy', async () => {
            await scriptControlPageActions.saveAndDeployPolicy();
        });

        await test.step('Execute the Script File on the Endpoint', async () => {
            console.log(`Executing script: ${TEST_SCRIPT}`);
            try {
                execSync(`powershell.exe -Command Start-Process "${TEST_SCRIPT}" -NoNewWindow -Wait`, { stdio: 'inherit' });
            } catch (error) {
                console.log('Script execution failed as expected (if blocked)');
            }
        });

        await test.step('Fetch and Validate Agent Logs', async () => {
            console.log(`Checking logs at: ${LOG_FILE_PATH}`);
            const logData = fs.readFileSync(LOG_FILE_PATH, 'utf8');
            const expectedLog = '.msi file blocked – untrusted execution';
            expect(logData).toContain(expectedLog);
        });
    });
});
