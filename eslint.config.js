import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { languageOptions: { globals: globals.node } },

    {
        // A list of files to lint
        files: ['**/*.{js,mjs,cjs,ts}'],

        // Custom plugins
        plugins: { perfectionist },

        // Custom rules
        rules: {
            'semi': ['warn', 'never'],
            'quotes': ['warn', 'single'],
            'no-unused-expressions': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'indent': ['warn', 4],
            'no-irregular-whitespace': 'off',
            'linebreak-style': ['error', 'unix'],
            'eol-last': ['warn', 'never'],
            'perfectionist/sort-imports': ['warn', {
                newlinesBetween: 'never',
                type: 'line-length',
            }]
        },
    },
    {
        /* A list of files and directories to ignore. To affect @typescript-eslint config, this directive should be placed at the top level of the configuration array, not inside the object that specifies the files to lint */
        ignores: ['dist/**/*'],
    }
]