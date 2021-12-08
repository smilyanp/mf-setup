module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        // Airbnb style guide with some minor tweaks.
        indent: ['error', 4],
        'linebreak-style': 'off',
        'eol-last': ['error', 'never'],
        'max-len': ['error', { code: 450 }],
        'space-before-function-paren': ['error', 'always'],
        'no-unused-vars': 'off',

        // Allow for..in and for..of that Airbnb discourages.
        'no-iterator': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement'],

        // These two are because of the requires from some generated files from Vue CLI Tailwind plugin.
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',

        // Vue specific
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],

        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],

        'import/extensions': 'off',
        // Latest version of ESLint seems to have turned these deprecated rules back on so turning them off for now.
        'no-spaced-func': 'off',
        'lines-around-directive': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
                '**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};