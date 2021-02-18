import React from 'react'
import ReactDOM from 'react-dom'
import SiteLayout from './SiteLayout'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SiteLayout />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
