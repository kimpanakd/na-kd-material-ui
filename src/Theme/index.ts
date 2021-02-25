import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: '#fff',
      main: '#0c1214',
      dark: '#000',
    },
    secondary: {
      contrastText: '#fff',
      dark: '#c51162',
      light: '#ff4081',
      main: 'rgb(184, 186, 186)',
    },
    divider: 'rgb(237, 238, 239)',
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgb(237, 72, 86)',
      primary: '#0c1214',
      secondary: 'rgb(184, 186, 186)',
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
    MuiTypography: {
      body1: {
        fontSize: 12,
      },
      body2: {
        fontSize: 10,
      },
    },
    MuiDrawer: {
      paper: {
        width: 'calc(100vw - 40px)',
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
