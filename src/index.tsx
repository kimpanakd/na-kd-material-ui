import React from 'react'
import ReactDOM from 'react-dom'
import SiteLayout from './siteLayout'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SiteLayout />
    </ThemeProvider>
  </React.StrictMode>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
navigator.serviceWorker.removeEventListener
