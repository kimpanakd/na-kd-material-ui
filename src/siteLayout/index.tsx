import React, { useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from './Appbar'
import { Container } from '@material-ui/core'
import Product from '../pages/ProductList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(2),
      height: '100vh',
      backgroundColor: theme.palette.background.paper,
    },
  })
)

const SiteLayout: React.FC = () => {
  const classes = useStyles()
  const [access, setAccess] = useState(false)
  const ACCESS_TOKEN = localStorage.getItem('access_token')

  useEffect(() => {
    ACCESS_TOKEN && setAccess(true)
  }, [setAccess, ACCESS_TOKEN])

  return access ? (
    <>
      <CssBaseline />
      <Appbar />
      <Container className={classes.container} maxWidth="lg">
        <Product />
      </Container>
    </>
  ) : null
}

export default SiteLayout
