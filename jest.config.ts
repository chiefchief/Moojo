import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  modulePathIgnorePatterns: ['types.ts'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|@react-navigation|react-native-reanimated|)/)',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      lines: 70,
      functions: 70,
    },
  },
  reporters: ['default'],
  clearMocks: true,
};

export default config;
