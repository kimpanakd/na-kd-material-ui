import React, { useEffect } from 'react'
import useStore from 'global-hook-store'
import { authStore } from '../stores/authStore'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from './Appbar'
import { Box, Container } from '@material-ui/core'
import Product from '../pages/Product'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: 'calc(100vh + 800px)',
      backgroundColor: '#b3b3b3', //theme.palette.background.paper,
    },
  })
)

export let ACCESS_TOKEN: string

const SiteLayout: React.FC = () => {
  const classes = useStyles()
  const { state, actions } = useStore(authStore)

  ACCESS_TOKEN = state?.access_token

  useEffect(() => {
    actions.getAuthTokens()
  }, [actions])

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Appbar />
      <Container className={classes.root} maxWidth="lg">
        <Product />
      </Container>
    </Box>
  )
}

export default SiteLayout
