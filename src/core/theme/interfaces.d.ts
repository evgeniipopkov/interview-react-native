type FontType = 'regular'
  | 'medium'
  | 'semiBold'

type ColorsType = 'white'
  | 'primary'
  | 'textPrimary'
  | 'textSecondary'

interface IFonts {
  [prop in FontType]: string
}

interface IColors {
  [prop in ColorsType]: string
}

interface ITheme {
  fonts: IFonts,
  colors: IColors
}

export { IFonts, IColors, ITheme };
