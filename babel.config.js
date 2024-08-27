module.exports = {
  presets: ['module:@react-native/babel-preset', "nativewind/babel"],
   plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // Root is set to the base of your project directory
        alias: {
          '@': './', // Maps '@' to the root directory
        },
      },
    ],
  ]
};
