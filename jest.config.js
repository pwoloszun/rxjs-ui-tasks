// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '@api/(.*)': '<rootDir>/src/app/api/$1',
    '@features/(.*)': '<rootDir>/src/app/features/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@utils/(.*)': '<rootDir>/src/app/utils/$1',
  },
};
