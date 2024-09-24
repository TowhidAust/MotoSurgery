module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        bracketSpacing: false,
        arrowParens: 'avoid',
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
