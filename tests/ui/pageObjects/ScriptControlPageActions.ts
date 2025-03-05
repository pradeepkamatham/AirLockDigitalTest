import type { Page } from '@playwright/test';
import { YourUsagePageElements } from './ScriptControlPageElements';

export class ScriptControlPageActions {
    private page: Page;
    private elements: YourUsagePageElements;

    constructor(page: Page) {
        this.page = page;
        this.elements = new YourUsagePageElements(page);
    }

    /**
     * Logs in a user by navigating to the login page, filling in the username and password, and clicking the submit button.
     *
     * @param username - The username of the user to log in.
     * @param password - The password of the user to log in.
     */
    async login(username: string, password: string) {
        await this.page.goto('https://your-webapp-url.com/login');
        await this.elements.elements.userName().fill(username);
        await this.elements.elements.password().fill(password);
        await this.elements.elements.submitBtn().click();
    }

    /**
     * Navigates to the Policy Management page. 
     * This method performs the following actions:
     * 1. Clicks on the policy management element.
     * 2. Waits for the page to load completely with the 'domcontentloaded' state.
     */
    async navigateToPolicyManagement() {
        await this.elements.elements.policyManagement().click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Configures the policy settings by performing the following actions:
     * - Selects the 'enabled_respect_policy' option from the control mode list.
     * - Selects the 'enforcement' option from the policy mode list.
     * - Checks the script type checkbox.
     */
    async configurePolicy() {
        await this.elements.elements.controlModeList().selectOption('enabled_respect_policy');
        await this.elements.elements.policyModeList().selectOption('enforcement');
        await this.elements.elements.scriptType().check();
    }

    /**
     * Saves and deploys the policy by clicking the save and deploy buttons sequentially.
     * Waits for the page to load after performing the actions.
     */
    async saveAndDeployPolicy() {
        await this.elements.elements.saveBtn().click();
        await this.elements.elements.deployBtn().click();
        await this.page.waitForLoadState('load');
    }
}