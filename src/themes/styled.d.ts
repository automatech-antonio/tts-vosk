import 'styled-components'
import primary from './primary'

declare module 'styled-components' {
  type ThemeType = typeof primary
  export interface DefaultTheme extends ThemeType {}
}
