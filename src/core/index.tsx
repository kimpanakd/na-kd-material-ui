import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from './Appbar'
import { Box } from '@material-ui/core'

const SiteLayout: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Appbar />
    </Box>
  )
}

export default SiteLayout
