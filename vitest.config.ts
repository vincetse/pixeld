import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'], // Generates coverage/lcov.info
      reportsDirectory: './coverage',
      include: ['src/**/*'],
      exclude: ['node_modules', 'dist'],
    },
  },
});
