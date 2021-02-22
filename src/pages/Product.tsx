import React, { useEffect } from 'react'
import useStore from 'global-hook-store'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { productsStore } from '../stores/productsStore'

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
)

const Product: React.FC = () => {
  const classes = useStyles()
  const { state, actions } = useStore(productsStore)

  useEffect(() => {
    actions.getProducts()
  }, [actions])

  console.log(state)

  return <Box className={classes.root}>sdfdsf</Box>
}

export default Product
