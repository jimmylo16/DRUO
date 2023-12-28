module.exports = {
  root: true,
  settings: { react: { version: "detect" } },
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs, !vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "no-multiple-empty-lines": [2, { max: 1, maxEOF: 0 }],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
