import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const LikeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="#0C1214"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.008 1C9.034 1 11.04 1.458 12 3.51 13.106 1.458 15.01 1 17.015 1 19.022 1 23 2.39 23 7.437c0 1.992-1.296 4.452-3.242 6.561-2.984 3.236-7.145 5.804-7.758 5.804-.675 0-3.112-1.776-7.312-5.326C2.229 12.039 1 9.693 1 7.436 1 2.41 5.002 1 7.008 1z"></path>
  </SvgIcon>
)

export default React.memo(LikeIcon)
