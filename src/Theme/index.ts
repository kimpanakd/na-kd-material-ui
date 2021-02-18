import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: '#fff',
      main: '#777',
      dark: '#000',
    },
  },
}

export const theme = createMuiTheme(themeOptions)

console.log(theme)
