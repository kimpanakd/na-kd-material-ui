import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, SvgIcon, SvgIconProps } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 15,
      height: 15,
      marginRight: theme.spacing(2),
    },
    svg: {
      width: '100%',
      height: '100%',
      fontSize: 15,
    },
  })
)

const SearchIcon = (props: SvgIconProps) => {
  const classes = useStyles()

  return (
    <Box component="span" className={classes.root}>
      <SvgIcon {...props} className={classes.svg}>
        <g
          id="Lined-Icons"
          stroke="#0C1214"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round">
          <g id="Icon/04-Menu/Magnifying-Glass" fillRule="nonzero" stroke="inherit">
            <path
              d="M8.369 15.737A7.369 7.369 0 108.369 1a7.369 7.369 0 000 14.737zm5.661-1.707l8.205 8.205"
              id="🎨-Line-Weight"></path>
          </g>
        </g>
      </SvgIcon>
    </Box>
  )
}

export default React.memo(SearchIcon)
