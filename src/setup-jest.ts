// import 'zone.js/testing';
import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

// cutom setup
import 'src/test-utils/setup';

const TEST_TIMEOUT = 5_000;

jest.setTimeout(TEST_TIMEOUT);
configure({
  asyncUtilTimeout: TEST_TIMEOUT,
});
