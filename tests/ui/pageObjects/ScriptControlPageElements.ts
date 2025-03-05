import type { Locator, Page } from '@playwright/test';

export class YourUsagePageElements {
  readonly elements: {
    userName: () => Locator;
    password: () => Locator;
    submitBtn: () => Locator;
    policyManagement: () => Locator;
    controlModeList: () => Locator;
    policyModeList: () => Locator;
    scriptType: () => Locator;
    saveBtn: () => Locator;
    deployBtn: () => Locator;  
  };

  constructor(public page: Page) {
    this.elements = {
        userName: () =>
        page.getByTestId('username'),
        password: () =>
            page.getByTestId('password'),
        submitBtn: () =>
            page.getByTestId('submit'),
        policyManagement: () => page.getByTestId('policyManagement'),
        controlModeList: () => page.getByTestId('controlModeList'),
        policyModeList: () => page.getByTestId('policyModeList'),
        scriptType: () => page.getByTestId('scriptType'),
        saveBtn: () => page.getByTestId('saveBtn'),
        deployBtn: () => page.getByTestId('deployBtn'),
    };
  }
}
