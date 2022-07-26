module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.d.ts'],
        alias: {
          theme: './src/core/theme',
        },
      },
    ],
  ],
};
