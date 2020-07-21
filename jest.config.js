module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/index.js'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/tests/**',
        '!**/*.config.js'
    ]
}