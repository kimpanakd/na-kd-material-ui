import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { AsyncState } from 'global-hook-store'
import { DataType } from '../stores/categoriesStore'
import { Box, Button, Divider, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  listWrapper: {
    padding: 0,
  },
  headingWrapper: {
    height: 57,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgb(237, 238, 239)',
    padding: '16px',
  },
  heading: {
    fontSize: 22,
    fontFamily: 'minion-3-display, serif',
    color: 'rgb(12, 18, 20)',
  },
  closeButton: {
    width: 40,
    height: 40,
    minWidth: 0,
    background: 'rgb(247, 247, 247)',
    color: 'rgb(12, 18, 20)',
    fontSize: 16,
    lineHeight: 1,
    borderRadius: '50%',
    padding: 0,
    fontWeight: 200,
  },
  listButton: {
    borderBottom: '1px solid rgb(237, 238, 239)',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
  buttonText: {
    fontWeight: 700,
    fontSize: 12,
  },
})

type PropType = {
  toggleMenu: () => void
  data: AsyncState<DataType[]>
  menuOpen: boolean
  closeMenu: () => void
}

const Menu: React.FC<PropType> = ({ data, menuOpen, closeMenu }) => {
  const classes = useStyles()

  const list = () => (
    <>
      <Box className={classes.headingWrapper}>
        <Typography className={classes.heading}>Menu</Typography>
        <Button className={classes.closeButton} onClick={closeMenu}>
          X
        </Button>
      </Box>
      <Divider />
      <div className={classes.list} role="presentation" onClick={closeMenu} onKeyDown={closeMenu}>
        <List className={classes.listWrapper} component="nav">
          {data.data?.map(item => (
            <ListItem button key={item.title} className={classes.listButton}>
              <span className={classes.buttonText}>{item.title}</span>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )

  return (
    <div>
      <Drawer variant="temporary" open={menuOpen} onClose={closeMenu}>
        {list()}
      </Drawer>
    </div>
  )
}

export default Menu
