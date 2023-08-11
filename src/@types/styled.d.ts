import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeTupe = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTupe {}
}
