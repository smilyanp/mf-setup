module.exports = {
  "preset": 'ts-jest',
  "collectCoverage": true,
  "collectCoverageFrom" : ["src/features/**/*.tsx", "src/store/**/*.ts"],
  "transformIgnorePatterns": [
    '<rootDir>/node_modules/'
  ],
  // "setupFilesAfterEnv": ['./tests/_mocks_/localStorage.ts'],
  "moduleNameMapper": { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|scss)$": "<rootDir>/assetsTransformer.js" }
};
