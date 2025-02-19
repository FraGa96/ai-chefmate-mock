import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none'],
        'allowSeparatedGroups': true,
      }],
      'no-duplicate-imports': 'error',
      // "import/order": ["error", {
      //   "groups": ["external", "builtin", "internal", "sibling", "parent", "index"]
      // }],
      'eol-last': 'error',
      'semi': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'no-empty-pattern': ['error', {
        'allowObjectPatternsAsParameters': true,
      }],
    },
  },
];
