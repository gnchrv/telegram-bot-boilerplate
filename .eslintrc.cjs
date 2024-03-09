/* Define the config the CommonJS way to prevent it from complaining on its own configuration file */
module.exports = {

    // Include recommended configurations
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],

    // Specify the TypeScript parser and its options
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },

    // Make ESLint account for existing Node.js variables, such as `process`
    env: { node: true },

    // Tell ESLint that the current file is in the root folder of the project
    root: true,

    // Include an additional set of rules
    rules: {
        'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
        'semi': ['warn', 'never'],
        'indent': ['warn', 4],
        'linebreak-style': ['error', 'unix'],
        'eol-last': ['warn', 'never'],
        'no-irregular-whitespace': ['off']
    }
}