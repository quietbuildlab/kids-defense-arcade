export default {
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:5175/",
  },
  webServer: {
    command: "pnpm run dev --port 5175",
    url: "http://127.0.0.1:5175/",
    reuseExistingServer: true,
  },
};
