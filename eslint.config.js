import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  // JavaScript base
  js.configs.recommended,
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // TypeScript base
  tseslint.configs.recommended,

  // Astro support with JSX A11y
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "astro/jsx-a11y/media-has-caption": 0,
      "astro/jsx-a11y/no-distracting-elements": 0,
    },
  },

  eslintConfigPrettier,
]);
