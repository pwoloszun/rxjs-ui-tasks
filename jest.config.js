// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
  },
};

