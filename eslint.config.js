// eslint.config.js — flat config (ESLint v9) for React + TypeScript
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
  // ensure ESLint considers src files and knows common globals
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist/**", "build/**", "node_modules/**"],
    languageOptions: {
      // do NOT use `env` here — use `globals` instead
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        navigator: "readonly",
        process: "readonly",
        // test globals:
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    }
  },

  // recommended JS rules
  js.configs.recommended,

  // TS + React rules and parser
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        navigator: "readonly",
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },
    plugins: { "@typescript-eslint": tsPlugin, react: reactPlugin },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
];
