type FontType = 'regular'
  | 'medium'
  | 'semiBold'

type ColorType = 'white'
  | 'primary'
  | 'tertiary'
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'valid'
  | 'orange'
  | 'lightOrange'
  | 'brightGray'

type FontsType = { [prop in FontType]: string }

type ColorsType = { [prop in ColorType]: string }

interface ITheme {
  fonts: FontsType,
  colors: ColorsType,
  width: number,
  height: number
}

export { FontsType, ColorsType, ITheme };
