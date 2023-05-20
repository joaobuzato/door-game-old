/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.tsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "jest-css-modules",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsConfig: "./tsconfig.test.json" }],
  },
};
