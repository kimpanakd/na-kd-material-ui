import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: '#fff',
      main: '#777',
      dark: '#000',
    },
  },
  typography: {
    fontFamily: 'proxima-nova,sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          boxSizing: 'border-box',
          fontSize: '62.5%',
          lineHeight: '1.4em',
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 16,
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: 24,
        height: 24,
        width: 24,
      },
    },
  },
}

export const theme = createMuiTheme(themeOptions)

console.log(theme)
