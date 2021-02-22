import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Box, IconButton, useScrollTrigger } from '@material-ui/core'
import MenuIcon from '../assets/icons/MenuIcon'
import LogoIcon from '../assets/icons/LogoIcon'
import UserIcon from '../assets/icons/UserIcon'
import LikeIcon from '../assets/icons/LikeIcon'
import CartIcon from '../assets/icons/CartIcon'
import Slide from '@material-ui/core/Slide'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '../assets/icons/SearchIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      paddingLeft: 0,
      paddingRight: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    searchToolbar: {
      position: 'sticky',
      left: 0,
      top: theme.mixins.toolbar.minHeight,
      backgroundColor: theme.palette.background.default,
      paddingBottom: theme.spacing(2),
    },
    menuButton: {
      width: 56,
      height: 56,
    },
    logotype: {
      paddingLeft: theme.spacing(1),
    },
    input: {
      paddingLeft: theme.spacing(2),
      fontSize: theme.typography.fontSize,
      flex: 1,
      height: 36,
      backgroundColor: '#efefef',
    },
  })
)

const Appbar: React.FC = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger()

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon fontSize="small" />
            </IconButton>
            <IconButton className={classes.logotype} color="inherit" aria-label="na-kd">
              <LogoIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton color="inherit" aria-label="mypages">
              <UserIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="likes">
              <LikeIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="cart">
              <CartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Slide appear={false} direction="down" in={!trigger}>
        <Toolbar className={classes.searchToolbar}>
          <InputBase
            startAdornment={<SearchIcon />}
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Toolbar>
      </Slide>
    </>
  )
}

export default React.memo(Appbar)
