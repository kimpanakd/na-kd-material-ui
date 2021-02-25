import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { ProductsType } from '../stores/productListStore'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    content: {
      padding: theme.spacing(1),
      display: 'flex',
    },
    left: {
      width: '60%',
      flex: 1,
    },
    right: {
      flex: 1,
      textAlign: 'right',
    },
    name: {
      width: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    textStroke: {
      textDecoration: 'line-through',
    },
    discount: {
      color: theme.palette.text.hint,
    },
  })
)

type PropType = ProductsType

const ProductCard: React.FC<PropType> = ({ images, name, brand, bestPrice, currency }) => {
  const classes = useStyles()
  const hasDiscount = bestPrice.current !== bestPrice.original

  return (
    <Card className={classes.root} elevation={0} square={true}>
      <CardActionArea>
        <CardMedia component="img" alt={name} width="100%" height="150%" image={images[0]} title={name} />
        <CardContent className={classes.content}>
          <Box className={classes.left}>
            <Typography variant="body1" color="textPrimary" component="p" className={classes.name}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {brand.name}
            </Typography>
          </Box>
          <Box className={classes.right}>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              className={hasDiscount ? classes.discount : ''}>
              {bestPrice.current} {currency}
            </Typography>
            {hasDiscount && (
              <Typography variant="body2" color="textSecondary" component="p" className={classes.textStroke}>
                {bestPrice.original} {currency}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ProductCard
