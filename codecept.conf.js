require('ts-node/register')
require('dotenv').config({ path: '.env' })

const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure')
setWindowSize(1440, 1080)
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: './tests/**/*.ts',
  output: './output',
  helpers: {
    FileSystem: {},
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    Puppeteer: {
      url: '',
      show: process.env.HEADLESS !== 'true',
      waitForNavigation: 'networkidle0',
      windowSize: '1440x1080',
      waitForAction: 400,
      waitForTimeout: 10000,
      chrome: {
        args: ['--no-sandbox'],
      },
    },
  },
  include: {
    SignInPage: './pages/signInPage.ts',
    SignUpPage: './pages/signUpPage.ts',
    SignInPageGmail: './pages/signInPageGmail.ts',
    SignInPageGitHub: './pages/signInPageGitHub.ts',
    DashboardPage: './pages/dashboardPage.ts',
    AbstractPage: './pages/abstractPage.ts',
    HeaderProjectPage: './pages/headerProjectPage.ts',
    SidebarProjectPage: './pages/sidebarProjectPage.ts',
    ProjectSettingsPage: './pages/projectSettingsPage.ts',
    AccountSettingsPage: './pages/accountSettingsPage.ts',
    VisualPage: './pages/visualPage.ts',
    AdvancedPage: './pages/advancedPage.ts',
    ProjectPage: './pages/projectPage.ts',
    WorkspaceSettingsPage: './pages/workspaceSettingsPage.ts',
    ProjectSteps: './steps/projectSteps.ts',
    ItemDao: './dao/itemDAO/ItemDao.ts',
    CodeceptSession: './dao/CodeceptSession.ts',
    SignInSteps: './steps/signInSteps.ts',
    SignUpSteps: './steps/signUpSteps.ts',
    VisualSteps: './steps/visualSteps.ts',
    AdvancedSteps: './steps/advancedSteps.ts',
    AbstractSteps: './steps/abstractSteps.ts',
    AccountSteps: './steps/accountSteps.ts',
    DashboardSteps: './steps/dashboardSteps.ts',
    SidebarProjectPageSteps: './steps/sidebarProjectPageSteps.ts',
    WorkspaceSettingsSteps: './steps/workspaceSettingsSteps.ts',
  },
  name: 'teleport-automation',
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
      },
      'mocha-junit-reporter': {
        stdout: '-',
        options: {
          mochaFile: './output/result.xml',
        },
      },
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
}
