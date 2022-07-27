type FontType = 'regular'
  | 'medium'
  | 'semiBold'

type ColorType = 'white'
  | 'primary'
  | 'textPrimary'
  | 'textSecondary'
  | 'tertiary'

type FontsType = { [prop in FontType]: string }

type ColorsType = { [prop in ColorType]: string }

interface ITheme {
  fonts: FontsType,
  colors: ColorsType,
  width: number,
  height: number
}

export { FontsType, ColorsType, ITheme };
