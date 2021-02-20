import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const CartIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="#0C1214">
    <path
      d="M17.304 6.5H4.691a1.5 1.5 0 00-1.436 1.413l-2 11.842A1.533 1.533 0 002.692 21.5h16.611a1.533 1.533 0 001.437-1.745l-2-11.842A1.5 1.5 0 0017.304 6.5zm-2.621-2.943A3.763 3.763 0 0010.998.5a3.764 3.764 0 00-3.682 3.038"
      stroke="#0C1214"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"></path>
  </SvgIcon>
)

export default React.memo(CartIcon)
