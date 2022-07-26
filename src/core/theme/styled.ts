import * as styledComponents from 'styled-components/native';
import { ReactNativeThemedStyledComponentsModule } from 'styled-components/native';

import { ITheme } from './interfaces';

const {
  default: styled, css, ThemeProvider,
} = styledComponents as unknown as ReactNativeThemedStyledComponentsModule<ITheme>;

export { css, ThemeProvider };

export default styled;
