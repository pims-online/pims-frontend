import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

import tseslint from 'typescript-eslint'
import tsParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import js from "@eslint/js";


export default defineConfig([{
    languageOptions: {
        globals: globals.browser,
        parser: tsParser,
    },

    extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactRefresh.configs.vite,
    ],
}, globalIgnores(["**/dist", "**/.eslintrc.cjs"])]);
