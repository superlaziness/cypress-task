module.exports = {
    env: {
        browser: true,
        es6: true,
        'cypress/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier', 'cypress'],
    rules: {
        'newline-per-chained-call': 2,
    },
};
