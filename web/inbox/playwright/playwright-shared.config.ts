import type { PlaywrightTestConfig as PlaywrightCtTestConfig } from "@playwright/experimental-ct-react";
import { devices, type PlaywrightTestConfig } from "@playwright/test";

// If undefined, the number of workers will be half of your CPU cores.
const numberOfWorkers = Number(process.env.NUMBER_OF_WORKERS) || undefined;

function escapeReplacement(str: string): string {
  return str.replace(/\$/g, "$$$$");
}

export function generateConfig(
  testMatchPostfix: string,
  config: Partial<PlaywrightTestConfig> | Partial<PlaywrightCtTestConfig>,
): PlaywrightTestConfig | PlaywrightCtTestConfig {
  const regexEscapedTestMatchPostfix = escapeReplacement(testMatchPostfix);

  return {
    testDir: "../src", // The path is relative to this configuration file.
    testMatch: `**/*${testMatchPostfix}`,
    // Whether to exit with an error if any tests are marked as `test.only`
    forbidOnly: Boolean(process.env.CI),
    retries: 1,
    projects: [
      {
        name: "chromium",
        use: {
          ...devices["Desktop Chrome"],
          acceptDownloads: true,
          viewport: { height: 1080, width: 1920 },
          permissions: ["clipboard-read", "clipboard-write"],
        },
        testIgnore: new RegExp(
          `.*.(mobile|small)${regexEscapedTestMatchPostfix}`,
        ),
      },
    ],
    workers: numberOfWorkers,
    reporter: process.env.CI ? "github" : "list",
    ...config,

    use: {
      trace: "retain-on-failure",
      testIdAttribute: "data-test-id",
      ...config.use,
    },
  };
}
