module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  roots: ['src/'],
  modulePathIgnorePatterns: ['./dist/'],
};
