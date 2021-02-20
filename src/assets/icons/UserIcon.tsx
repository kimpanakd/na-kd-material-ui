import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const UserIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="#0C1214">
    <path
      d="M12 11.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zm-9.75 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"
      stroke="#0C1214"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"></path>
  </SvgIcon>
)

export default React.memo(UserIcon)
