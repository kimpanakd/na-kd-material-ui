import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 20,
      height: 16,
    },
  })
)

const MenuIcon = (props: SvgIconProps) => {
  const classes = useStyles()

  return (
    <SvgIcon {...props} className={classes.root} viewBox="0 0 20 16">
      <g
        id="Assets"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <g id="Icons" transform="translate(-242.000000, -52.000000)" fillRule="nonzero" stroke="#0C1214">
          <g id="Icon/04-Menu/Menu" transform="translate(240.000000, 48.000000)">
            <path
              d="M2.5,19.5 L21.5,19.5 M2.5,12.003 L21.5,12.003 M2.5,4.5 L21.5,4.5"
              id="🎨-Line-Weight"
              vectorEffect="non-scaling-stroke"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default React.memo(MenuIcon)
