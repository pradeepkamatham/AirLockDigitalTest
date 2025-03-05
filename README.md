Setup and Configuration
1. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/pradeepkamatham/AirLockDigitalTest.git

2. Install Dependencies
Run npm install

3. Execute the Test
Run the test using Playwright’s test runner:

npx playwright test script-policy-test.spec.js
4. The test results are logged in the agent.log file, located at:
agent.log
You can check this log file for any messages such as:

.msi file blocked – untrusted execution (Blocked execution).
.msi file blocked – untrusted execution [audit] (Allowed execution in audit mode).

5. Show report
Run  npx playwright show-report






Test Scenario Overview
The test will simulate the following scenarios:

1. Log into the Web Application:
Automates the login process to the web-based policy management system.
2. Configure Script Control Policies:
Set the script control modes (Disabled, Enabled [Audit], Enabled [Respect Policy]) and global policy modes (Audit Mode, Enforcement Mode).
Enable script types like .msi, .bat, .cmd, .ps1, .jar.
3. Deploy Policy to Endpoint:
Deploy the configured policy to the endpoint.
4. Execute Script on the Endpoint:
Run a script (e.g., .msi file) on the endpoint using PowerShell.
5. Verify the agent.log File:
Check the log file to verify if the script was allowed or blocked based on the configured policy.