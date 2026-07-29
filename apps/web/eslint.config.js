import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { ignores: ['dist/', 'node_modules/', 'src/components/', 'src/hooks/use-toast.js', 'src/hooks/use-workspace.jsx', 'src/tailwind.config.js'] },
  {
    files: ['src/App.jsx', 'src/main.jsx', 'src/pages/**/*.jsx', 'src/hooks/use-theme.jsx', 'src/data/**/*.js'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    },
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^(React|_)', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'no-empty': 'off',
    },
  },
];
