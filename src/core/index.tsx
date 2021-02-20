import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from './Appbar'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      backgroundColor: '#b3b3b3', //theme.palette.background.paper,
    },
  })
)

const SiteLayout: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Appbar />
    </Box>
  )
}

export default SiteLayout
