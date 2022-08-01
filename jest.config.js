const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
        '^~components/(.*)$': '<rootDir>/components/$1',
        '^~icons/(.*)$': '<rootDir>/icons/$1',
    },
};

module.exports = createJestConfig(customJestConfig);
