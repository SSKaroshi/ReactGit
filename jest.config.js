module.exports = {
   
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    modulePaths: ["<rootDir>", "src"],
    moduleDirectories: ["node_modules", "src"],
    testMatch: ["<rootDir>/src/**/__tests__/**/.{js,jsx,ts,tsx}", "<rootDir>/src/**/.{spec,test}.{js,jsx,ts,tsx}"],
    transform: {
         '^.+\\.(t|j)sx?$': ['@swc/jest']
           
      },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.js"
      },
      setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
      setupFiles: ["./setupJest.js"]
    };
