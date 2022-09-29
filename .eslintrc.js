module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules/", ".eslintrc.*", "package.json"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "airbnb/hooks",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "import", "jsx-a11y"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": ["off"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "no-const-assign": ["warn"],
    "no-dupe-else-if": ["error"],
    "no-unused-vars": ["warn"],
    "no-irregular-whitespace": ["error"],
    "camelcase": ["error"],
    "curly": ["warn"],
    "eqeqeq": ["warn"],
    "no-var": ["error"],
    "prefer-const": ["warn"],
    "prefer-destructuring": ["warn"],
    "react/prop-types": ["warn"],
  },
  parserOptions: {
    parser: "babel-parser",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
