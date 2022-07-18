// .eslintrc.js

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 8,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'error', // 사용하지않는 변수 error처리 하겠다.
        'no-console': 'off', // 콘솔로그를 사용하수 있게 꺼놓겠다.
        'no-else-return': ['error', { allowElseIf: false }], // if문에 else 문을 사용하지 규칙을 정의한다.
        semi: [1, 'always'],
        'space-unary-ops': 2,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': 'off',
    },
};
