import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#cfe8fc',
      height: '100vh',
    },
  })
)

const SimpleContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="lg">
      addsfsdf
    </Container>
  )
}

export default React.memo(SimpleContainer)
