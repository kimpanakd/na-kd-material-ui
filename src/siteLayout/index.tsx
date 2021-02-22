import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from './Appbar'
import { Container } from '@material-ui/core'
import Product from '../pages/Product'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100vw',
      height: '100vh',
      backgroundColor: '#b3b3b3', //theme.palette.background.paper,
    },
  })
)

const SiteLayout: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Appbar />
      <Container className={classes.container} maxWidth="lg">
        <Product />
      </Container>
    </>
  )
}

export default SiteLayout
