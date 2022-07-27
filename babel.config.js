module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.d.ts'],
        alias: {
          theme: './src/core/theme',
          features: './src/features',
          customHooks: './src/core/shared/hooks',
          constants: './src/core/shared/constants',
          navigation: './src/core/navigation',
          screens: './src/core/shared/screens',
          components: './src/core/shared/components',
          svgImages: './src/core/shared/images',
          interfaces: './src/core/shared/interfaces',
        },
      },
    ],
  ],
};
