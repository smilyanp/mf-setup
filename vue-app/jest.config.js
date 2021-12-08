module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/*.spec.(js|jsx|ts|tsx)'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        // 'src/**/**/*.{js,vue}',
        '!src/main.js',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -12,
        },
    },
    verbose: true,
    setupFilesAfterEnv: [
        '<rootDir>src/jest-components.js',
        'jest-mock-console/dist/setupTestFramework.js',
    ],
};