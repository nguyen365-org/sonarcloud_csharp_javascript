module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text"],
    testResultsProcessor: "./normalizePaths.js",  // Custom script for path normalization

    transform: {
        "^.+\\.js$": "babel-jest",
    },
    modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
    coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
};
