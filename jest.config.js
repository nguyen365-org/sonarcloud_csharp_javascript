module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
    coverageDirectory: "coverage",
    // Normalize paths for Windows environments
    reporters: [
        "default",
        [
            "jest-junit",
            {
                outputDirectory: "coverage",
                outputName: "junit.xml",
            },
        ],
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
    coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],

    // Custom fix: Normalize file paths to use forward slashes
    testResultsProcessor: "./normalizePaths.js",
};
