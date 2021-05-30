module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-dupe-keys': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'react/prop-types': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
