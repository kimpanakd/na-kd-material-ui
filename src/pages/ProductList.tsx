import React, { useEffect } from 'react'
import useStore from 'global-hook-store'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid, Theme, Typography } from '@material-ui/core'
import { productListStore } from '../stores/productListStore'
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: `calc(100% + ${theme.spacing(4) + 8}px)`,
      marginLeft: -(theme.spacing(2) + 4),
      marginRight: -(theme.spacing(2) + 4),
    },
  })
)

const ProductList: React.FC = () => {
  const classes = useStyles()
  const { state, actions } = useStore(productListStore)

  useEffect(() => {
    actions.getProductList()
  }, [actions])

  return (
    <>
      <Typography align="center" variant="body1" gutterBottom>
        {state.products.data?.totalProductCount} Choices
      </Typography>
      <Grid container className={classes.root} spacing={1}>
        {state.products.data?.products?.map(product => (
          <Grid item xs={6} key={product.articleNumber}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProductList
