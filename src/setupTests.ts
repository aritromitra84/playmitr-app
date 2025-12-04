// src/setupTests.ts
import { expect } from 'vitest'
import * as jestDomMatchersModule from '@testing-library/jest-dom/matchers'

// support both CommonJS default export and ESM named exports
const matchers = (jestDomMatchersModule as any).default ?? jestDomMatchersModule

if (!matchers || Object.keys(matchers).length === 0) {
  console.error('⚠️ jest-dom matchers object is empty or undefined:', jestDomMatchersModule)
} else {
  expect.extend(matchers)
  console.log('*** RUNNING src/setupTests.ts — jest-dom matchers extended ***')
}
