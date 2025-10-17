import type { PlaywrightTestConfig } from "@playwright/test";
import { generateConfig } from "./playwright-shared.config";

const config: PlaywrightTestConfig = generateConfig(".spec.ts", {
  timeout: 45_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: "http://localhost:1337",
  },
  webServer: {
    command: "pnpm vite preview",
    url: "http://localhost:1337",
    reuseExistingServer: true,
    stdout: "ignore",
    stderr: "pipe",
    timeout: 5_000,
  },
});

// eslint-disable-next-line no-restricted-exports
export default config;
