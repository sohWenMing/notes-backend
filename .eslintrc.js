module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'plugins': [
        '@stylistic/js'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'no-unused-vars': ['error', { 'varsIgnorePattern': '(next|err)' }],
        '@stylistic/js/quotes': ['error', 'single'],
        '@stylistic/js/linebreak-style': ['error', 'unix'],
        '@stylistic/js/object-curly-spacing': ['error', 'always'],
        '@stylistic/js/no-trailing-spaces': 'error',
        '@stylistic/js/semi': ['error', 'always']
    }
};
